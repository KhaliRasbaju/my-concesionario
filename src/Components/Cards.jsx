export default function Card(props) {
  const { title, img, alt, date, description } = props;
  return (
    <div className="card-item">
      <img src={img} alt={alt} />
      <h2>{title}</h2>
      <small>{date}</small>
      <p>{description}</p>
    </div>
  );
}
