export function Step({ heading, desc, imgSrc }) {
  return (
    <>
      <div id={"stepContainer"}>
        <img src={imgSrc} alt={heading} />
        <h2>{heading}</h2>
        <p>{desc}</p>
      </div>
    </>
  );
}
