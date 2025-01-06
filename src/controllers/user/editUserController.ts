// Servidor
import { Request, Response } from "express";

// Biblioteca
import { createClient } from "@supabase/supabase-js";

// Service
import { EditUserService } from "../../Services/user/editUserService";

class EditUserController {
  async handle(req: Request, res: Response) {
    const id = req.query.id as string;
    const company = (req.query.company as string) || "nenhum";

    const { cep, email, is_active, name, phone, role, surname } = req.body;
    const file = req.file;

    try {
      let photoUrl: string | null = null;

      if (file) {
        const supabaseUrl = company === "catalogs" && process.env.SUPABASE_URL_CATALOGS;
        const supabaseKey = company === "catalogs" && process.env.SUPABASE_KEY_CATALOGS;

        if (!supabaseUrl || !supabaseKey) {
          return res
            .status(500)
            .json({ error: "Configuração do Supabase ausente" });
        }

        const supabase = createClient(supabaseUrl, supabaseKey);
        const bucketName = "Products";
        const folderName = "users";
        const fileName = `${folderName}/${Date.now()}_${file.originalname}`;

        const { error: uploadError } = await supabase.storage
          .from(bucketName)
          .upload(fileName, file.buffer, {
            cacheControl: "3600",
            upsert: false,
          });

        if (uploadError) {
          return res.status(500).json({ error: uploadError.message });
        }

        const { data: publicData } = supabase.storage
          .from(bucketName)
          .getPublicUrl(fileName);
        photoUrl = publicData?.publicUrl || null;
      }

      const editUserService = new EditUserService();
      const editUser = await editUserService.execute({
        id,
        cep,
        email,
        is_active,
        name,
        phone,
        photo: photoUrl,
        role,
        surname,
        company,
      });

      return res.json({ message: "success", user: editUser });
    } catch (err) {
      if (err instanceof Error) {
        if (err.message === "Usuário não encontrado!") {
          return res.status(404).json({ error: err.message });
        } else {
          return res.status(500).json({ error: "Erro interno do servidor" });
        }
      } else {
        return res.status(500).json({ error: "Erro desconhecido" });
      }
    }
  }
}

export { EditUserController };
