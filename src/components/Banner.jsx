export default function Banner({ imgUrl, imgAlt, isTextShow, titleBanner }) {
  return (
    <div className="banner">
      <img src={imgUrl} alt={imgAlt} />
      { isTextShow ? <h1>{titleBanner}</h1> : "" }
    </div>
  );
}
