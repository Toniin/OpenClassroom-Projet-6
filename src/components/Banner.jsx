export default function Banner({ imgUrl, imgAlt, isTextShow, titleBanner }) {
  return (
    <section className="banner">
      <img src={imgUrl} alt={imgAlt} />
      { isTextShow ? <h1>{titleBanner}</h1> : "" }
    </section>
  );
}
