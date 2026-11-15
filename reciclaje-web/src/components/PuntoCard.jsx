function PuntoCard({ nombre, sector, material, capacidad }) {
  return (
    <article className="card">
      <h3>{nombre}</h3>
      <p><strong>Sector:</strong> {sector}</p>
      <p><strong>Material:</strong> {material}</p>
      <p><strong>Capacidad:</strong> {capacidad} unidades</p>
    </article>
  );
}

export default PuntoCard;