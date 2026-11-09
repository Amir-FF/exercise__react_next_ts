"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  box: {
    id: number;
    title: string;
    description: string;
  };
};

export default function BoxLink({ box }: Props) {
  const pathname = usePathname();
  const href = `/photos/${box.id}`;

  const content = (
    <>
      <h2 className="text-xl font-bold">{box.title}</h2>
      <p>{box.description}</p>
      <p className="mt-4">ID: {box.id}</p>
      <p className="mt-4 underline">View details</p>
    </>
  );

  if (pathname === href) {
    return (
      <div className="h-75 rounded-xl bg-blue-500 p-5 text-white">
        {content}
      </div>
    );
  }

  return (
    <Link href={href} className="h-75 rounded-xl bg-blue-500 p-5 text-white">
      {content}
    </Link>
  );
}
