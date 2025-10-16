import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ExternalLink, Calendar, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
export function Writing({ title, description, substackUrl, featured }) {
    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };
    return (_jsx("section", { id: "writing", className: "py-20 bg-gray-50", children: _jsxs("div", { className: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8", children: [_jsxs("div", { className: "text-center mb-16", children: [_jsx("h2", { className: "text-4xl font-bold mb-6 text-gray-900", children: title }), _jsx("p", { className: "text-xl text-gray-600 max-w-3xl mx-auto mb-8", children: description }), _jsxs("a", { href: substackUrl, target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center gap-2 bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors duration-200", children: ["Visit My Substack", _jsx(ExternalLink, { className: "w-4 h-4" })] })] }), _jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8", children: featured.map((article, index) => (_jsxs(Card, { className: "group hover:shadow-lg transition-shadow duration-200", children: [_jsxs(CardHeader, { children: [_jsx(CardTitle, { className: "text-xl mb-3 group-hover:text-orange-600 transition-colors duration-200", children: _jsxs("a", { href: article.url, target: "_blank", rel: "noopener noreferrer", className: "flex items-start gap-2", children: [article.title, _jsx(ExternalLink, { className: "w-4 h-4 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200" })] }) }), _jsxs("div", { className: "flex items-center gap-4 text-sm text-gray-500 mb-3", children: [_jsxs("div", { className: "flex items-center gap-1", children: [_jsx(Calendar, { className: "w-4 h-4" }), formatDate(article.publishedAt)] }), _jsxs("div", { className: "flex items-center gap-1", children: [_jsx(Clock, { className: "w-4 h-4" }), article.readTime] })] })] }), _jsxs(CardContent, { children: [_jsx("p", { className: "text-gray-600 mb-4 line-clamp-3", children: article.description }), _jsx("div", { className: "flex flex-wrap gap-2", children: article.tags.map((tag, tagIndex) => (_jsx("span", { className: "bg-orange-500/10 text-orange-600 px-2 py-1 rounded text-xs", children: tag }, tagIndex))) })] })] }, index))) })] }) }));
}
