
import { ExternalLink, Calendar, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Article {
  title: string;
  description: string;
  publishedAt: string;
  readTime: string;
  url: string;
  tags: string[];
}

interface WritingProps {
  title: string;
  description: string;
  substackUrl: string;
  featured: Article[];
}

export function Writing({ title, description, substackUrl, featured }: WritingProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <section id="writing" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
          <p className="text-lg text-gray-600 mb-6">{description}</p>
          <a
            href={substackUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-orange-600 hover:text-orange-700 font-medium"
          >
            View all posts on Substack
            <ExternalLink className="ml-2 h-4 w-4" />
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((article, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-lg line-clamp-2">
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-900 hover:text-orange-600 transition-colors"
                  >
                    {article.title}
                  </a>
                </CardTitle>
                <div className="flex items-center text-sm text-gray-500 space-x-4">
                  <span className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {formatDate(article.publishedAt)}
                  </span>
                  <span className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {article.readTime}
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {article.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {article.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-orange-100 text-orange-700 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-600 hover:text-orange-700 text-sm font-medium inline-flex items-center"
                >
                  Read more
                  <ExternalLink className="ml-1 h-3 w-3" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <a
            href={substackUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors inline-flex items-center"
          >
            Subscribe to my newsletter
            <ExternalLink className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
