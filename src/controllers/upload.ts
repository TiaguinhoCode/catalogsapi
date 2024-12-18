// Servidor
import { Request, Response } from "express";

// Client
import { createClient } from "@supabase/supabase-js";

class UploadController {
  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const file = req.file;
      const company = (req.query.company as string) || "nenhum";

      const supabaseUrl =
        company === "catalogs"
          ? process.env.SUPABASE_URL_CATALOGS
          : process.env.SUPABASE_URL_OTHER_COMPANY;
      const supabaseKey =
        company === "catalogs"
          ? process.env.SUPABASE_KEY_CATALOGS
          : process.env.SUPABASE_KEY_OTHER_COMPANY;

      if (!supabaseUrl || !supabaseKey) {
        return res
          .status(500)
          .json({ error: "Supabase configuration missing" });
      }

      const supabase = createClient(supabaseUrl, supabaseKey);

      if (!file) {
        return res.status(400).json({ error: "No file uploaded" });
      }

      const bucketName = "Products";
      const fileName = `products/${Date.now()}_${file.originalname}`;

      const { data: uploadData, error: uploadError } = await supabase.storage
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
      const publicUrl = publicData?.publicUrl;

      if (!publicUrl) {
        return res.status(500).json({ error: "Failed to generate public URL" });
      }

      return res.status(200).json({
        message: "File uploaded successfully",
        url: publicUrl,
      });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }
}

export { UploadController };
