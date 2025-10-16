import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
    const handleSubmit = async (e) => {
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
            }
            else {
                throw new Error("Form submission failed");
            }
        }
        catch (error) {
            toast({
                title: "Error",
                description: "Failed to send message. Please try again.",
                variant: "destructive"
            });
        }
        finally {
            setIsSubmitting(false);
        }
    };
    return (_jsx("section", { id: "contact", className: "py-16 bg-gray-50", children: _jsx("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8", children: _jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-12 items-start", children: [_jsxs("div", { children: [_jsx("h2", { className: "text-3xl font-bold mb-6 text-gray-900", children: "Ready to Transform Your Product Vision?" }), _jsx("p", { className: "text-lg text-gray-700 mb-6", children: "Whether you're looking for a full-time senior product manager or need consulting expertise for your next initiative, I'm here to help turn complex challenges into successful products." }), _jsxs("div", { className: "space-y-4", children: [_jsxs("div", { className: "flex items-center text-gray-600", children: [_jsx(Mail, { className: "text-orange-500 mr-3 h-5 w-5" }), _jsx("span", { children: "merziyahpoonawala@gmail.com" })] }), _jsxs("div", { className: "flex items-center text-gray-600", children: [_jsx(Phone, { className: "text-orange-500 mr-3 h-5 w-5" }), _jsx("span", { children: "713-240-1242" })] }), _jsxs("div", { className: "flex items-center text-gray-600", children: [_jsx(Linkedin, { className: "text-orange-500 mr-3 h-5 w-5" }), _jsx("a", { href: "https://linkedin.com/in/merziyahpoonawala", className: "hover:text-orange-500 transition-colors", target: "_blank", rel: "noopener noreferrer", children: "linkedin.com/in/merziyahpoonawala" })] })] })] }), _jsx(Card, { className: "bg-white shadow-lg", children: _jsx(CardContent, { className: "p-8", children: _jsxs("form", { onSubmit: handleSubmit, className: "space-y-4", children: [_jsxs("div", { children: [_jsx(Label, { htmlFor: "name", children: "Name" }), _jsx(Input, { id: "name", name: "name", required: true, className: "focus:ring-orange-500 focus:border-orange-500" })] }), _jsxs("div", { children: [_jsx(Label, { htmlFor: "email", children: "Email" }), _jsx(Input, { id: "email", name: "email", type: "email", required: true, className: "focus:ring-orange-500 focus:border-orange-500" })] }), _jsxs("div", { children: [_jsx(Label, { htmlFor: "message", children: "Message" }), _jsx(Textarea, { id: "message", name: "message", rows: 4, required: true, className: "focus:ring-orange-500 focus:border-orange-500" })] }), _jsx(Button, { type: "submit", className: "w-full bg-orange-500 hover:bg-orange-600", disabled: isSubmitting, children: isSubmitting ? "Sending..." : "Send Message" })] }) }) })] }) }) }));
}
