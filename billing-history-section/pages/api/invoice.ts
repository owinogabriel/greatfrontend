import fs from "fs";
import path from "path";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const filePath = path.join(process.cwd(), "data", "invoice.json");
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const invoices = JSON.parse(fileContent);
    res.status(200).json(invoices);
  } catch (error) {
    console.error("API error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
