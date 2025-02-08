import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Car Enthusiast",
    text: "Absolutely thrilled with my new Ford Mustang! The team helped me find exactly what I was looking for and made the whole process seamless.",
    rating: 5,
    avatar: "/avatars/sarah-johnson.jpg",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Daily Commuter",
    text: "Best car buying experience I've ever had. Their inventory is top-notch and the pricing was transparent from start to finish.",
    rating: 5,
    avatar: "/avatars/michael-chen.jpg",
  },
  {
    id: 3,
    name: "Emma Williams",
    role: "First-time Buyer",
    text: "Patient and knowledgeable staff who took the time to explain everything. Found my perfect vehicle within budget!",
    rating: 5,
    avatar: "/avatars/emma-williams.jpg",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            What Our Customers Say
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Hear from thousands of happy drivers who found their perfect vehicle
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8  ">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="hover:shadow-lg transition-shadow"
            >
              <CardContent className="p-6">
                <div className="flex gap-2 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>

                <p className="text-gray-600 mb-6 italic">
                  "{testimonial.text}"
                </p>

                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar} />
                    <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
