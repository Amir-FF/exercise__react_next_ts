export default function LayoutBoxes(props: LayoutProps<"/photos">) {
  return (
    <>
      <div>{props.show}</div>

      <br />
      <br />

      <div>{props.children}</div>
    </>
  );
}
