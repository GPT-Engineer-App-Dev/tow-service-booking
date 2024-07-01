import { Button } from "@/components/ui/button";

function Index() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">Tow Service Booking</h1>
      <h2 className="text-2xl mb-4">Reliable and Fast Tow Services</h2>
      <p className="mb-6">
        We offer reliable and fast tow services to get you back on the road as quickly as possible. Our team of professionals is available 24/7 to assist you with all your towing needs.
      </p>
      <Button variant="primary" size="lg" asChild>
        <a href="/booking">Book Now</a>
      </Button>
    </div>
  );
}

export default Index;