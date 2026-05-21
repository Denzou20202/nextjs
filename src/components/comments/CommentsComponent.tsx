import Link from "next/link";
import {getAllComments} from "@/src/services/api.service";

export const CommentsComponent = async () => {

  const comments = await getAllComments();

  return (
    <div>
      {
        comments.map((comment) => (
          <div key={comment.id}>
            <Link href={{pathname:`/comments/${comment.id}`, query:{data:JSON.stringify(comment)}}}>{comment.id} - {comment.name}</Link>
          </div>
        ))
      }
    </div>
  );
};