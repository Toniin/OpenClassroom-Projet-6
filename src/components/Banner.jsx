export default function Banner({ imgUrl, imgAlt, isTextShow, text }) {
  return (
    <section className="banner">
      <img src={imgUrl} alt={imgAlt} />
      { isTextShow ? <h1>{text}</h1> : "" }
    </section>
  );
}
