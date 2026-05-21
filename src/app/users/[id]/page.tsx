import type { Metadata } from 'next';
import {FC} from "react";
import {SearchParams} from "next/dist/server/request/search-params";
import {IUser} from "@/src/models/IUser";

type Props = {
  params: Promise<{id: string }>;
  searchParams: Promise<SearchParams>;
}

export const generateMetadata = async ({params}: Props): Promise<Metadata> => {
  const {id} = await params;

  return {
    title: `User ${id} page`
  }
}

const UserPage:FC<Props> = async ({searchParams}) => {

  const {data} = await searchParams;
  let obj = null;
  if (typeof data === "string") {
    obj = JSON.parse(data) as IUser;
  }

  return (
    <div>
      {
        obj && <>User {obj.id} page <hr/>
          <br/>  Name: {obj.name}
          <br/>  Username: {obj.username}
          <br/>  Email: {obj.email}
        </>

      }
    </div>
  );
};

export default UserPage;