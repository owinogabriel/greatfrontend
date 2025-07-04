import fs from 'fs';
import path from 'path';
import { NextApiRequest, NextApiResponse } from 'next';

/**
 * GET /api/invoices
 *
 * This API route reads invoice data from a local JSON file (invouse.json)
 * and returns it as a JSON response.
 *
 * Example request:
 *    GET http://localhost:3000/api/invoices
 *
 */
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // allow GET requests
  if (req.method !== 'GET') {
    return res.status(404).json({ message: 'Method Not Allowed' });
  }

  try {
    // Resolve absolute path to the invouse.json file
    const filePath = path.join(process.cwd(), 'data', 'invoice.json');

    // Read the file contents (synchronously in this case)
    const fileContent = fs.readFileSync(filePath, 'utf-8');

    // Parse the JSON string into a JavaScript array
    const invoices = JSON.parse(fileContent);

    // Respond with a 200 OK and the invoice data
    res.status(200).json(invoices);
  } catch (error) {
    // Handle file read or JSON parse errors
    console.error("Failed to read or parse invouse.json:", error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
