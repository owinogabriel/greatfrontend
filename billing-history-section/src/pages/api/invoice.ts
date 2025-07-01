import { readFileSync } from 'fs';
import {NextApiRequest, NextApiResponse} from 'next'
import path from 'path';


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

export default function handler(req: NextApiRequest, res: NextApiResponse){
 if (req.method != 'GET')
    return res.status(405).json({message: 'Method Not Allowed'});
}
try {
  // Resolve absolute path to the invoices.json file
  const filePath = path.join(process.cwd(), 'data', 'invoice.json')

  // REad the file contents
  const fileContent =  readFileSync(filePath, 'utf-8')
  const invoices = JSON.parse(fileContent) // Parsing the JSON string into Js array

  // Respond with OK and the invoice data
  res..status(200).json(invoices)
} catch(error) {
  // Handling file read or json  parse error
  console.error("Failed to read or parse invoices", error);
  res.status(500)({message: "Internal Server Error"})
}
