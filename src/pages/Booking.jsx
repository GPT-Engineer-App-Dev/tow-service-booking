import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

function Booking() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Book a Tow Service</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <Label htmlFor="name">Name</Label>
          <Input id="name" {...register("name", { required: true })} />
          {errors.name && <span className="text-red-500">This field is required</span>}
        </div>
        <div>
          <Label htmlFor="phone">Phone Number</Label>
          <Input id="phone" {...register("phone", { required: true })} />
          {errors.phone && <span className="text-red-500">This field is required</span>}
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" {...register("email", { required: true })} />
          {errors.email && <span className="text-red-500">This field is required</span>}
        </div>
        <div>
          <Label htmlFor="vehicle">Vehicle Make and Model</Label>
          <Input id="vehicle" {...register("vehicle", { required: true })} />
          {errors.vehicle && <span className="text-red-500">This field is required</span>}
        </div>
        <div>
          <Label htmlFor="pickup">Pickup Location</Label>
          <Input id="pickup" {...register("pickup", { required: true })} />
          {errors.pickup && <span className="text-red-500">This field is required</span>}
        </div>
        <div>
          <Label htmlFor="dropoff">Drop-off Location</Label>
          <Input id="dropoff" {...register("dropoff", { required: true })} />
          {errors.dropoff && <span className="text-red-500">This field is required</span>}
        </div>
        <div>
          <Label htmlFor="datetime">Date and Time</Label>
          <Input id="datetime" type="datetime-local" {...register("datetime", { required: true })} />
          {errors.datetime && <span className="text-red-500">This field is required</span>}
        </div>
        <Button type="submit" variant="primary">Submit</Button>
      </form>
    </div>
  );
}

export default Booking;