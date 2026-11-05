type Props = {
  params: Promise<{
    id?: string[];
  }>;
};

export default async function Page({ params }: Props) {
  const { id } = await params;

  return (
    <div>
      {id?.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </div>
  );
}
