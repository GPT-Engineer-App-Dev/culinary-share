import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

const SubmitRecipe = () => {
  const { register, handleSubmit, reset } = useForm();
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (newRecipe) => {
      const response = await fetch("/api/recipes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newRecipe),
      });

      if (!response.ok) {
        throw new Error("Failed to submit recipe");
      }

      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["recipes"] });
      toast("Recipe submitted successfully!");
      reset();
    },
    onError: () => {
      toast.error("Failed to submit recipe. Please try again.");
    },
  });

  const onSubmit = (data) => {
    mutation.mutate(data);
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
          <label className="block text-sm font-medium">Image URL</label>
          <Input {...register("image")} placeholder="Image URL" />
        </div>
        <Button type="submit" disabled={mutation.isLoading}>
          {mutation.isLoading ? "Submitting..." : "Submit Recipe"}
        </Button>
      </form>
    </div>
  );
};

export default SubmitRecipe;