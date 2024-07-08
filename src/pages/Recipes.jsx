import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

const fetchRecipes = async () => {
  const response = await fetch("/api/recipes");
  if (!response.ok) {
    throw new Error("Failed to fetch recipes");
  }
  return response.json();
};

const Recipes = () => {
  const [search, setSearch] = useState("");
  const { data: recipes, error, isLoading } = useQuery({
    queryKey: ["recipes"],
    queryFn: fetchRecipes,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading recipes</div>;

  return (
    <div className="container mx-auto px-4 space-y-8">
      <div className="flex justify-center mt-8">
        <Input
          type="text"
          placeholder="Search recipes..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-lg"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes
          .filter((recipe) =>
            recipe.title.toLowerCase().includes(search.toLowerCase())
          )
          .map((recipe) => (
            <Card key={recipe.id}>
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
                <Button as={Link} to={`/recipes/${recipe.id}`}>
                  View Recipe
                </Button>
              </CardContent>
            </Card>
          ))}
      </div>
    </div>
  );
};

export default Recipes;