import {IUser} from "@/src/models/IUser";
import {IPost} from "@/src/models/IPost";
import {IComment} from "@/src/models/IComment";

export const getAllUsers = async ():Promise<IUser[]> => {
  const users = await fetch(`https://jsonplaceholder.typicode.com/users`)
  .then(res => res.json());
  return users;
}

export const getAllPosts = async ():Promise<IPost[]> => {
  const posts = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    .then(res => res.json());
  return posts;
}

export const getAllComments = async ():Promise<IComment[]> => {
  const comments = await fetch(`https://jsonplaceholder.typicode.com/comments`)
    .then(res => res.json());
  return comments;
}