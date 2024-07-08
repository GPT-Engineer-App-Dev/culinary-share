export default async function handler(req, res) {
  if (req.method === "POST") {
    const { id } = req.query;
    const { rating } = req.body;

    // Here you would typically update the rating in a database.
    // For this example, we'll just log it to the console.
    console.log(`Recipe ${id} rated with ${rating} stars`);

    res.status(200).json({ message: "Rating submitted successfully" });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}