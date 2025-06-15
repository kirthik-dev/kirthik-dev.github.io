
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { EducationItemType } from "@/data/education";

export const EducationCard = ({ item }: { item: EducationItemType }) => {
  const cardContent = (
    <Card className="h-full flex flex-col group overflow-hidden transition-all duration-300 ease-in-out hover:shadow-primary/20 bg-card/80 backdrop-blur-sm">
      <div className="relative aspect-video overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-lg leading-tight">{item.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm text-muted-foreground">{item.description}</p>
      </CardContent>
      <CardFooter className="flex justify-between items-center mt-auto pt-4 border-t border-border/50">
        <span className="bg-secondary text-secondary-foreground text-xs font-semibold px-2.5 py-1 rounded-full">
          {item.tag}
        </span>
        {item.logo && (
          <img
            src={item.logo}
            alt="issuer logo"
            className="h-6 w-auto object-contain"
          />
        )}
      </CardFooter>
    </Card>
  );

  if (item.link) {
    return (
      <a
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block h-full"
      >
        {cardContent}
      </a>
    );
  }
  return <div className="h-full">{cardContent}</div>;
};
