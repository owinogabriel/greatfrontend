import { readFileSync } from "fs";
import { NextApiRequest, NextApiResponse } from "next";
import path from "path";

/**
 * GET api/invoices
 *
 * This API route reads invoice data from a local JSON file (Invoice.JSON)
 * and returns it as a JSON response
 *
 * Example request:
 *  GET http://localhost:3000/api/invoices
 *
 **/

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method != "GET")
    return res.status(405).json({ message: "Method Not Allowed" });
  try {
    // Resolve absolute path to the invoices.json file
    const filePath = path.join(process.cwd(), "data", "invoice.json");

    // Read the file contents
    const fileContent = readFileSync(filePath, "utf-8");
    const invoices = JSON.parse(fileContent); // Parsing the JSON string into Js array

    // Return the JSON response
    return res.status(200).json(invoices);
  } catch (error) {
    // Handle errors (e.g., file not found or invalid JSON)
    return res.status(500).json({
      message: "Error reading invoices",
      error: (error as Error).message,
    });
  }
}
