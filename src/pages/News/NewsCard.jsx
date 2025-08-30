import { Card, CardHeader, CardBody, CardFooter, Typography, Button } from "@material-tailwind/react";

export default function NewsCard({ poster, title, description, publishedAt, creator, link }) {
  return (
    <Card className="max-w-sm shadow-xl rounded-2xl overflow-hidden hover:scale-105 transition-transform">
      <CardHeader floated={false} className="h-48">
        <img src={poster} alt={title} className="w-full h-full object-cover" />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" className="font-bold text-large text-mainGold">
          {title}
        </Typography>
        <Typography className="text-small text-gray-700 mt-2">
          {description}
        </Typography>
      </CardBody>
      <CardFooter className="flex flex-col gap-2">
        <Typography className="text-xs text-gray-500">
          Published: {publishedAt}
        </Typography>
        <Typography className="text-xs text-gray-500">
          By: {creator}
        </Typography>
        <Button
          size="sm"
          className="bg-mainGold text-white hover:opacity-90 mt-2"
          onClick={() => window.open(link, "_blank")}
        >
          Read More
        </Button>
      </CardFooter>
    </Card>
  );
}
