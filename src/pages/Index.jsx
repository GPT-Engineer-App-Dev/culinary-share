import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="space-y-8">
      <section className="relative w-full h-[400px] bg-gray-200 flex items-center justify-center">
        <img src="/placeholder.svg" alt="placeholder" className="absolute inset-0 w-full h-full object-cover mx-auto" />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl font-bold">Welcome to Recipe Share</h1>
          <p className="mt-4 text-lg">Discover and share amazing recipes</p>
          <Button as={Link} to="/recipes" className="mt-6">Explore Recipes</Button>
        </div>
      </section>

      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">Featured Recipes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((recipe) => (
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
      </section>

      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">Latest Recipes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[7, 8, 9, 10, 11, 12].map((recipe) => (
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
      </section>
    </div>
  );
};

export default Index;