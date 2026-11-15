# Examen Spring Boot + React: Sistema de Puntos de Reciclaje Urbano

Aplicación web que registra y lista puntos de reciclaje de una ciudad.

## Tecnologías
- Backend: Spring Boot, Spring Data JPA, PostgreSQL
- Frontend: React (Vite), fetch y CSS

## Estructura
- `reciclaje-api/`: API REST (puerto 8080)
- `reciclaje-web/`: interfaz React (puerto 5173)

## Requisitos previos
- Java 17 o superior
- Node.js y npm
- PostgreSQL con una base de datos llamada `reciclaje_db`

## Ejecución

### Backend
1. Crear la base de datos: `CREATE DATABASE reciclaje_db;`
2. Definir la variable de entorno `DB_PASSWORD` con la contraseña del usuario `postgres`.
3. Ejecutar la clase `ReciclajeApiApplication` o usar `mvn spring-boot:run` dentro de `reciclaje-api`.

### Frontend
```bash
cd reciclaje-web
npm install
npm run dev
```
Abrir `http://localhost:5173`.

## API
| Método y ruta | Descripción |
|---|---|
| GET `/api/puntos` | Devuelve todos los puntos |
| POST `/api/puntos` | Registra un nuevo punto |

Ejemplo de JSON para el POST:
```json
{ "nombre": "EcoEstación Norte", "sector": "La Floresta", "material": "Plástico", "capacidad": 120 }
```