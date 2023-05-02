export default function Card({ imgUrl, imgAltCard, titleCard }) {
  return (
    <article className="cardContent">
      <img src={imgUrl} alt={imgAltCard} />
      <h2>{titleCard}</h2>
    </article>
  )
}
