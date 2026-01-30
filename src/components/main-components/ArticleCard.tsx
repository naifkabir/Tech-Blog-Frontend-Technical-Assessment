import { BlogPost } from "@/src/types/blog";
import Image from "next/image";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import { Badge } from "@/src/components/ui/badge";
import { cn } from "@/src/lib/utils";
import { Button } from "../ui/button";

export default function ArticleCard({
  post,
  onClick,
}: {
  post: BlogPost;
  onClick: () => void;
}) {
  return (
    <article tabIndex={0} onKeyDown={(e) => e.key === "Enter" && onClick()}>
      <Card className={cn("p-2 overflow-hidden")}>
        <Image
          src={post.photo_url}
          alt={`Cover image for ${post.title}`}
          width={400}
          height={200}
          className="aspect-video w-full object-cover rounded-md"
        />

        <CardHeader className={cn("py-3")}>
          <CardAction>
            <Badge
              variant="default"
              className="uppercase text-[10px] px-3 py-1"
            >
              {post.category}
            </Badge>
          </CardAction>
          <CardTitle>{post.title}</CardTitle>
          <CardDescription>{post.description}</CardDescription>
        </CardHeader>
        <CardFooter>
          <Button
            className="cursor-pointer h-11 w-full"
            onClick={onClick}
            variant="default"
          >
            Read More
          </Button>
        </CardFooter>
      </Card>
    </article>
  );
}
