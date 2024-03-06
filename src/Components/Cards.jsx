// La función `Card` es un componente de React que acepta propiedades (`props`).

export default function Card(props) {
  // Desestructuración de las propiedades para facilitar su uso.
  const { title, img, alt, infolink, description } = props;
  // El componente devuelve una estructura de tarjeta con la información proporcionada.
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
//hola