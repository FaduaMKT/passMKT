export default function handler(req, res) {
  const passwordMain = process.env.PASSWORD;
  const passwordView = process.env.VIEW_PASS;
  const { password, type } = req.body;

  if (req.method !== "POST") return res.status(405).json({ error: "Método no permitido" });

  if (type === 'main' && password === passwordMain) {
    return res.status(200).json({ success: true });
  }

  if (type === 'view' && password === passwordView) {
    return res.status(200).json({ success: true });
  }

  return res.status(200).json({ success: false });
}