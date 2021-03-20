import React from "react";
import { Post } from "../../pages/posts/[slug]";
import PageNav from "../../components/PageNav";
import MediaCard from "../Card";

type Props = {
  posts: Post[];
  pageNumber: number;
  numOfPages: number;
  curDir?: string;
};

export const ITEMS_PER_PAGE = 9;
const PostsList = ({ posts, pageNumber, numOfPages, curDir }: Props) => {
  return (
    <div className="flex flex-col items-center">
      <div className="grid grid-cols-1 md:grid-cols-3">
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
                    ? post.featuredImage.node.sourceUrl
                    : "image_not_found.png"
                }
                cardWidth={345}
                imgHeight={140}
                link={`${curDir}/${post.slug}`}
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
