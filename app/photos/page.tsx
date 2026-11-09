import BoxLink from "@/components/BoxLink";

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
        <BoxLink key={box.id} box={box} />
      ))}
    </div>
  );
}

export { boxes };
