import {FC} from "react";
import {Metadata} from "next";
import {SearchParams} from "next/dist/server/request/search-params";
import {IPost} from "@/src/models/IPost";

type Props = {
  params: Promise<{id: string}>;
  searchParams: Promise<SearchParams>;
}

export const generateMetadata = async ({params}: Props): Promise<Metadata> => {
  const {id} = await params;

  return {
    title: `Post ${id} page`
  }
}

const PostPage:FC<Props> = async ({searchParams}) => {

  const {data} = await searchParams;
  let obj = null;
  if (typeof data === "string") {
    obj = JSON.parse(data) as IPost;
  }
  return (
    <div>
      {
        obj && <>Post {obj.id} page <hr/>
          <br/>  UserId: {obj.userId}
          <br/>  Title: {obj.title}
          <br/>  Body: {obj.body}
        </>

      }
    </div>
  );
};

export default PostPage;