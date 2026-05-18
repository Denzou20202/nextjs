import Link from "next/link";

export const Menu = () => {
  return (
    <div>
      <ul className="flex items-center justify-center text-2xl gap-4">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/users">Users</Link></li>
        <li><Link href="/posts">Posts</Link></li>
        <li><Link href="/comments">Comments</Link></li>
      </ul>
    </div>
  );
};