// Servidor
import { Request, Response } from "express";

// Client
import { supabase } from "../supaBase/client";

class UploadController {
  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const file = req.file;

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
