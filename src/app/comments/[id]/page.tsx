import {FC} from "react";

type Props = {
  params:{id: string}
}

const CommentPage:FC<Props> = async ({params}) => {
  const {id} = await params;
  return (
    <>
    Comment {id} page
    </>
  );
};

export default CommentPage;