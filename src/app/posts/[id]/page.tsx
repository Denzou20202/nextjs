import {FC} from "react";

type Props = {
  params: {id: string};
}

const PostPage:FC<Props> = async ({params}) => {
  const {id} = await params;
  return (
    <>
    Post {id} page
    </>
  );
};

export default PostPage;