import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, Linkedin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/manpabwj", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        toast({
          title: "Message sent!",
          description: "Thank you for your message. I'll get back to you soon."
        });
        form.reset();
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
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
                <span>hello@merziyah.com</span>
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
                    required
                    className="focus:ring-orange-500 focus:border-orange-500"
                  />
                </div>
                <Button 
                  type="submit" 
                  onClick={() => {
                    window.gtag?.("event", "contact_send_click", {
                      location: window.location.pathname,
                      placement: "contact_form",
                      is_submitting: Boolean(isSubmitting),
                    });
                  }}
                  className="w-full bg-orange-500 hover:bg-orange-600"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
