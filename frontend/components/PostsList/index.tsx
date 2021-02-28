import React from "react";
import { Post } from "../../interfaces";
import PageNav from "../../components/PageNav";
import MediaCard from "../Card";
type Props = {
  posts: Post[];
  pageNumber: number;
  numOfPages: number;
};

const PostsList = ({ posts, pageNumber, numOfPages }: Props) => {
  return (<div className="flex flex-col items-center">
    {posts!.map((post: Post, index: number) => {
      return (
        <div className="m-4">
          <MediaCard
            key={index}
            title={post.title}
            description={post.excerpt || ""}
            imgTitle={post.title}
            imgURL={
              post.featuredImage
                ? post.featuredImage.sourceUrl
                : "image_not_found.png"
            }
            cardWidth={345}
            imgHeight={140}
            link={`posts/${post.slug}`}
          />
        </div>
      );
    })}
    <PageNav pageNumber={pageNumber} numOfPages={numOfPages} />
  </div>);
};

export default PostsList;
