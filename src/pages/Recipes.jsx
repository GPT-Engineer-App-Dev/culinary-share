import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";

const Recipes = () => {
  const [search, setSearch] = useState("");

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
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((recipe) => (
          <Card key={recipe}>
            <img src="/placeholder.svg" alt="placeholder" className="w-full h-[200px] object-cover mx-auto" />
            <CardHeader>
              <CardTitle>Recipe Title {recipe}</CardTitle>
              <CardDescription>Brief description of the recipe.</CardDescription>
            </CardHeader>
            <CardContent>
              <Button as={Link} to={`/recipes/${recipe}`}>View Recipe</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Recipes;