import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";

const SubmitRecipe = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold mb-6">Submit Your Recipe</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Recipe Title</label>
          <Input {...register("title")} placeholder="Recipe Title" />
        </div>
        <div>
          <label className="block text-sm font-medium">Ingredients</label>
          <Textarea {...register("ingredients")} placeholder="Ingredients" />
        </div>
        <div>
          <label className="block text-sm font-medium">Steps</label>
          <Textarea {...register("steps")} placeholder="Steps" />
        </div>
        <div>
          <label className="block text-sm font-medium">Image</label>
          <Input type="file" {...register("image")} />
        </div>
        <Button type="submit">Submit Recipe</Button>
      </form>
    </div>
  );
};

export default SubmitRecipe;