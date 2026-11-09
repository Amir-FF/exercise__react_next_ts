import Link from "next/link";

const boxes = [
  { id: 1, title: "Box One", description: "Description for the first box" },
  { id: 2, title: "Box Two", description: "Description for the second box" },
  { id: 3, title: "Box Three", description: "Description for the third box" },
  { id: 4, title: "Box Four", description: "Description for the fourth box" },
  { id: 5, title: "Box Five", description: "Description for the fifth box" },
  { id: 6, title: "Box Six", description: "Description for the sixth box" },
];

export default function Boxes() {
  return (
    <div className="grid grid-cols-4 gap-4">
      {boxes.map((box) => (
        <Link
          href={`/photos/${box.id}`}
          key={box.id}
          className="h-75 rounded-xl bg-blue-500 p-5 text-white"
        >
          <h2 className="text-xl font-bold">{box.title}</h2>
          <p>{box.description}</p>
          <p className="mt-4">ID: {box.id}</p>
          <p className="mt-4 underline">View details</p>
        </Link>
      ))}
    </div>
  );
}

export { boxes };
