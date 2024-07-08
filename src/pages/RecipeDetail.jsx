import { useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const fetchRecipe = async (id) => {
  const response = await fetch(`/api/recipes/${id}`);
  if (!response.ok) {
    throw new Error("Failed to fetch recipe");
  }
  return response.json();
};

const submitRating = async ({ id, rating }) => {
  const response = await fetch(`/api/recipes/${id}/rate`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ rating }),
  });

  if (!response.ok) {
    throw new Error("Failed to submit rating");
  }

  return response.json();
};

const RecipeDetail = () => {
  const { id } = useParams();
  const queryClient = useQueryClient();
  const { data: recipe, error, isLoading } = useQuery({
    queryKey: ["recipe", id],
    queryFn: () => fetchRecipe(id),
  });

  const [rating, setRating] = useState(0);

  const mutation = useMutation({
    mutationFn: submitRating,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["recipe", id] });
      toast("Rating submitted successfully!");
    },
    onError: () => {
      toast.error("Failed to submit rating. Please try again.");
    },
  });

  const handleRatingSubmit = () => {
    mutation.mutate({ id, rating });
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading recipe</div>;

  return (
    <div className="container mx-auto px-4">
      <Card>
        <CardHeader>
          <CardTitle>{recipe.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p>{recipe.description}</p>
          <div className="mt-4">
            <h3 className="text-xl font-bold">Rate this recipe</h3>
            <div className="flex items-center space-x-2 mt-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <Button
                  key={star}
                  variant={rating >= star ? "primary" : "outline"}
                  onClick={() => setRating(star)}
                >
                  {star}
                </Button>
              ))}
            </div>
            <Button onClick={handleRatingSubmit} className="mt-4">
              Submit Rating
            </Button>
          </div>
          <div className="mt-4">
            <h3 className="text-xl font-bold">Average Rating</h3>
            <p>{recipe.averageRating.toFixed(1)} / 5</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RecipeDetail;