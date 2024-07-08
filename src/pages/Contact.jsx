import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";

const Contact = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Name</label>
          <Input {...register("name")} placeholder="Your Name" />
        </div>
        <div>
          <label className="block text-sm font-medium">Email</label>
          <Input type="email" {...register("email")} placeholder="Your Email" />
        </div>
        <div>
          <label className="block text-sm font-medium">Subject</label>
          <Input {...register("subject")} placeholder="Subject" />
        </div>
        <div>
          <label className="block text-sm font-medium">Message</label>
          <Textarea {...register("message")} placeholder="Your Message" />
        </div>
        <Button type="submit">Send Message</Button>
      </form>
    </div>
  );
};

export default Contact;