import { useEffect, useState } from "react";
import PuntoCard from "./components/PuntoCard";
import "./App.css";

const API_URL = "http://localhost:8080/api/puntos";

const FORM_INICIAL = { nombre: "", sector: "", material: "", capacidad: "" };

function App() {
  const [puntos, setPuntos] = useState([]);
  const [form, setForm] = useState(FORM_INICIAL);
  const [error, setError] = useState("");

  useEffect(() => {
    const cargarPuntos = async () => {
      try {
        const respuesta = await fetch(API_URL);
        if (!respuesta.ok) throw new Error("Error al consultar los puntos");
        const datos = await respuesta.json();
        setPuntos(datos);
      } catch (e) {
        setError("No se pudo conectar con el backend. ¿Está ejecutándose?");
      }
    };
    cargarPuntos();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const respuesta = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          capacidad: Number(form.capacidad),
        }),
      });
      if (!respuesta.ok) throw new Error("Error al guardar el punto");
      const nuevo = await respuesta.json();
      setPuntos([...puntos, nuevo]);
      setForm(FORM_INICIAL);
    } catch (e) {
      setError("No se pudo guardar el punto. Revisa los datos y el backend.");
    }
  };

  return (
    <main className="contenedor">
      <h1>Puntos de Reciclaje Urbano</h1>

      <form className="formulario" onSubmit={handleSubmit}>
        <input
          name="nombre"
          placeholder="Nombre del punto"
          value={form.nombre}
          onChange={handleChange}
          required
        />
        <input
          name="sector"
          placeholder="Sector o barrio"
          value={form.sector}
          onChange={handleChange}
          required
        />
        <input
          name="material"
          placeholder="Material que recibe"
          value={form.material}
          onChange={handleChange}
          required
        />
        <input
          name="capacidad"
          type="number"
          min="1"
          placeholder="Capacidad (unidades)"
          value={form.capacidad}
          onChange={handleChange}
          required
        />
        <button type="submit">Registrar punto</button>
      </form>

      {error && <p className="error">{error}</p>}

      <section className="grid">
        {puntos.map((p) => (
          <PuntoCard
            key={p.id}
            nombre={p.nombre}
            sector={p.sector}
            material={p.material}
            capacidad={p.capacidad}
          />
        ))}
      </section>

      {puntos.length === 0 && !error && (
        <p className="vacio">Aún no hay puntos registrados.</p>
      )}
    </main>
  );
}

export default App;