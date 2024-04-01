import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req, res) {
  if (req.method === "POST") {
    // Middleware para parsear el cuerpo de la solicitud
    const { name } = req.body;
    return res.status(200).json({ name });
  } else if (req.method === "GET") {
    return res.status(200).json({ name: "John Doe" });
  } else {
    // Método no permitido
    return res.status(405).json({ message: "Method Not Allowed" });
  }
}
