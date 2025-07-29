import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, Linkedin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

export function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const contactMutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon."
      });
      setFormData({ name: "", email: "", message: "" });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive"
      });
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    contactMutation.mutate(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Ready to Transform Your Product Vision?</h2>
            <p className="text-lg text-gray-700 mb-6">
              Whether you're looking for a full-time senior product manager or need consulting expertise for your next initiative, I'm here to help turn complex challenges into successful products.
            </p>
            <div className="space-y-4">
              <div className="flex items-center text-gray-600">
                <Mail className="text-orange-500 mr-3 h-5 w-5" />
                <span>merziyahpoonawala@gmail.com</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Phone className="text-orange-500 mr-3 h-5 w-5" />
                <span>713-240-1242</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Linkedin className="text-orange-500 mr-3 h-5 w-5" />
                <a 
                  href="https://linkedin.com/in/merziyahpoonawala" 
                  className="hover:text-orange-500 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  linkedin.com/in/merziyahpoonawala
                </a>
              </div>
            </div>
          </div>
          
          <Card className="bg-white shadow-lg">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="focus:ring-orange-500 focus:border-orange-500"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="focus:ring-orange-500 focus:border-orange-500"
                  />
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="focus:ring-orange-500 focus:border-orange-500"
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-orange-500 hover:bg-orange-600"
                  disabled={contactMutation.isPending}
                >
                  {contactMutation.isPending ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
