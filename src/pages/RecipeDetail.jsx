import { useParams } from "react-router-dom";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Rating from "@/components/Rating";

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

  const mutation = useMutation({
    mutationFn: submitRating,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["recipe", id] });
    },
  });

  const handleRatingSubmit = (rating) => {
    mutation.mutate({ id, rating });
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading recipe</div>;

  return (
    <div className="container mx-auto px-4">
      <Card>
        <img
          src={recipe.image || "/placeholder.svg"}
          alt={recipe.title}
          className="w-full h-[200px] object-cover mx-auto"
        />
        <CardHeader>
          <CardTitle>{recipe.title}</CardTitle>
          <CardDescription>{recipe.ingredients}</CardDescription>
        </CardHeader>
        <CardContent>
          <p>{recipe.steps}</p>
          <div className="mt-4">
            <h3 className="text-xl font-bold">Average Rating: {recipe.averageRating || "No ratings yet"}</h3>
            <Rating onSubmit={handleRatingSubmit} initialRating={recipe.userRating || 0} />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RecipeDetail;