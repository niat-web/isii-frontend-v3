import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ArticleLoaderProps {
  count?: number;
  columns?: 1 | 2 | 3;
  variant?: "admin" | "public";
}

const ArticleLoader = ({ count = 6, columns = 3, variant = "admin" }: ArticleLoaderProps) => {
  const gridCols = {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
  };

  if (variant === "public") {
    // Public variant matches ArticleCard structure
    return (
      <div className={`grid ${gridCols[columns]} gap-8`}>
        {Array.from({ length: count }).map((_, index) => (
          <div key={index} className="bg-card border border-border overflow-hidden h-full flex flex-col">
            <Skeleton className="aspect-[16/9] w-full" />
            <div className="p-5 flex flex-col flex-grow">
              <Skeleton className="h-3 w-24 mb-2" />
              <Skeleton className="h-6 w-full mb-4 flex-grow" />
              <Skeleton className="h-4 w-20" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  // Admin variant matches Dashboard article cards
  return (
    <div className={`grid ${gridCols[columns]} gap-6`}>
      {Array.from({ length: count }).map((_, index) => (
        <Card key={index} style={{ backgroundColor: '#ffffff' }}>
          <CardHeader>
            <Skeleton className="aspect-video w-full rounded-lg mb-4" />
            <CardTitle className="text-lg mb-2">
              <Skeleton className="h-6 w-3/4" />
            </CardTitle>
            <Skeleton className="h-4 w-1/2" />
          </CardHeader>
          <CardContent>
            <div className="flex gap-2">
              <Skeleton className="h-8 flex-1" />
              <Skeleton className="h-8 w-12" />
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ArticleLoader;

