import { boxes } from "../page";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function BoxDetails({ params }: Props) {
  const { id } = await params;

  const box = boxes.find((item) => item.id === Number(id));

  if (!box) {
    return <h1>The requested box was not found!</h1>;
  }

  return (
    <div className="rounded-xl bg-gray-100 p-8">
      <h1 className="text-3xl font-bold">{box.title}</h1>
      <p className="mt-4">{box.description}</p>
      <p className="mt-4">ID: {box.id}</p>
    </div>
  );
}
