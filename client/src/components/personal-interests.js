import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Book, Mountain, Dumbbell, GraduationCap } from "lucide-react";
import { Link } from "wouter";
const iconMap = {
    book: Book,
    mountain: Mountain,
    dumbbell: Dumbbell,
    "graduation-cap": GraduationCap,
};
export function PersonalInterests({ items }) {
    // Create placeholder images with gradients based on the interest
    const getImageGradient = (icon) => {
        const gradients = {
            book: "from-blue-400 to-purple-600",
            mountain: "from-green-400 to-emerald-600",
            dumbbell: "from-red-400 to-orange-600",
            "graduation-cap": "from-indigo-400 to-blue-600",
        };
        return gradients[icon] || "from-gray-400 to-gray-600";
    };
    return (_jsx("section", { id: "personal", className: "py-16 bg-white", children: _jsxs("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8", children: [_jsx("h2", { className: "text-3xl font-bold text-center mb-12 text-gray-900", children: "Personal Interests" }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6", children: items.map((item, index) => {
                        const IconComponent = iconMap[item.icon];
                        const isReadingCard = item.title.toLowerCase() === 'reading';
                        const cardContent = (_jsxs("div", { className: `group ${isReadingCard ? 'cursor-pointer hover:transform hover:scale-105 transition-transform duration-200' : ''}`, children: [_jsxs("div", { className: "relative h-48 rounded-xl overflow-hidden mb-3 shadow-lg", children: [_jsx("div", { className: `absolute inset-0 bg-gradient-to-br ${getImageGradient(item.icon)} opacity-90` }), _jsx("div", { className: "absolute inset-0 flex items-center justify-center", children: IconComponent && (_jsx(IconComponent, { className: "w-16 h-16 text-white opacity-60" })) }), _jsx("div", { className: "absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4", children: _jsx("h3", { className: "font-bold text-white text-lg", children: item.title }) })] }), _jsx("p", { className: "text-sm text-gray-600 text-center", children: item.description })] }));
                        return (_jsx("div", { children: isReadingCard ? (_jsx(Link, { href: "/reading", children: cardContent })) : (cardContent) }, index));
                    }) })] }) }));
}
