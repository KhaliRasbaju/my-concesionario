export default function Card(props) {
  const { title, img, alt, infolink, description } = props;
  return (
    <div className="card-item">
      <img src={img} alt={alt} />
      <h2>{title}</h2>
      <p>{description}</p>
      <a href={infolink} target="_blank">
        Ver Mas
      </a>
    </div>
  );
}
