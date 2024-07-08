import { recipes } from "./data";

export default async function handler(req, res) {
  const { id } = req.query;

  if (req.method === "GET") {
    const recipe = recipes.find((recipe) => recipe.id === parseInt(id));
    if (!recipe) {
      return res.status(404).json({ message: "Recipe not found" });
    }
    res.status(200).json(recipe);
  } else if (req.method === "POST") {
    const { rating } = req.body;
    const recipe = recipes.find((recipe) => recipe.id === parseInt(id));
    if (!recipe) {
      return res.status(404).json({ message: "Recipe not found" });
    }
    recipe.ratings.push(rating);
    recipe.averageRating =
      recipe.ratings.reduce((acc, curr) => acc + curr, 0) /
      recipe.ratings.length;
    res.status(200).json({ message: "Rating submitted successfully" });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}