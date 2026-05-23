import Link from "next/link";

export const Menu = () => {
  return (
    <div>
      <ul className="flex items-center justify-center text-2xl gap-4">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/cars">Cars</Link></li>
        <li><Link href="/cars/create">Create Car</Link></li>
      </ul>
    </div>
  );
};