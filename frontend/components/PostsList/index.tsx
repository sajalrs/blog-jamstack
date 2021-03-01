import React from "react";
import { Post } from "../../interfaces";
import PageNav from "../../components/PageNav";
import MediaCard from "../Card";

type Props = {
  posts: Post[];
  pageNumber: number;
  numOfPages: number;
};

export const ITEMS_PER_PAGE = 3;
const PostsList = ({ posts, pageNumber, numOfPages }: Props) => {
  return (
    <div className="flex flex-col items-center">
      <div className="grid grid-cols-3">
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
      </div>
      <PageNav pageNumber={pageNumber} numOfPages={numOfPages} />
    </div>
  );
};

export default PostsList;
