import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

function ContactUs() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <Label htmlFor="name">Name</Label>
          <Input id="name" {...register("name", { required: true })} />
          {errors.name && <span className="text-red-500">This field is required</span>}
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" {...register("email", { required: true })} />
          {errors.email && <span className="text-red-500">This field is required</span>}
        </div>
        <div>
          <Label htmlFor="message">Message</Label>
          <Textarea id="message" {...register("message", { required: true })} />
          {errors.message && <span className="text-red-500">This field is required</span>}
        </div>
        <Button type="submit" variant="primary">Send Message</Button>
      </form>
    </div>
  );
}

export default ContactUs;