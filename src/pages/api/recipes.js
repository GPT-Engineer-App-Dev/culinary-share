export default async function handler(req, res) {
  if (req.method === "POST") {
    const { title, ingredients, steps, image } = req.body;

    // Here you would typically store the recipe in a database.
    // For this example, we'll just log it to the console.
    console.log("New Recipe Submitted:", { title, ingredients, steps, image });

    res.status(200).json({ message: "Recipe submitted successfully" });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}