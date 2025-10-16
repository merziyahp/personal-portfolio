import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
export function CaseStudies({ studies }) {
    // Safety check for undefined studies
    if (!studies || !Array.isArray(studies)) {
        return null;
    }
    return (_jsx("section", { id: "case-studies", className: "py-16 bg-gray-50", children: _jsxs("div", { className: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8", children: [_jsx("h2", { className: "text-3xl font-bold text-center mb-12 text-gray-900", children: "Case Studies" }), _jsx("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8", children: studies.map((study, index) => (_jsxs(Card, { className: "bg-white shadow-lg hover:shadow-xl transition-shadow duration-300", children: [_jsx("div", { className: "w-full h-48 bg-gray-200 overflow-hidden", children: _jsx("img", { src: `/images/case-studies-${index + 1}.png`, alt: `${study.title} - Professional workspace`, className: "w-full h-full object-cover" }) }), _jsxs(CardContent, { className: "p-6", children: [_jsx("h3", { className: "text-xl font-bold mb-3 text-gray-900", children: study.title }), _jsx("p", { className: "text-gray-600 mb-4", children: study.description }), _jsx("div", { className: "space-y-2 mb-4", children: study.achievements.map((achievement, achievementIndex) => (_jsxs("div", { className: "flex items-center text-sm text-gray-600", children: [_jsx(CheckCircle, { className: "text-orange-500 mr-2 h-4 w-4" }), _jsx("span", { children: achievement })] }, achievementIndex))) }), _jsx("div", { className: "flex flex-wrap gap-2", children: (study.tags || []).map((tag, tagIndex) => (_jsx("span", { className: "bg-orange-500/10 text-orange-600 px-2 py-1 rounded text-xs", children: tag }, tagIndex))) })] })] }, index))) })] }) }));
}
