import { useState } from "react";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const Rating = ({ onSubmit, initialRating = 0 }) => {
  const [rating, setRating] = useState(initialRating);

  const handleRating = (value) => {
    setRating(value);
  };

  const handleSubmit = () => {
    if (onSubmit) {
      onSubmit(rating);
    }
  };

  return (
    <div className="flex flex-col items-center space-y-2">
      <div className="flex space-x-1">
        {[1, 2, 3, 4, 5].map((value) => (
          <Star
            key={value}
            className={`h-6 w-6 cursor-pointer ${
              value <= rating ? "text-yellow-500" : "text-gray-300"
            }`}
            onClick={() => handleRating(value)}
          />
        ))}
      </div>
      <Button onClick={handleSubmit}>Submit Rating</Button>
    </div>
  );
};

export default Rating;