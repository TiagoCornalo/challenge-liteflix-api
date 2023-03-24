
# Challenge LiteFlix Api

Esta API fue creada para el proyecto de Liteflix. La API provee un endpoint para obtener películas y un endpoint para subir nuevas películas.

## Instalación 

  1. Clonar el repositorio
  2. Instalar dependencias con npm install
  3. Crear un archivo .env en el root del proyecto y agregar las siguientes variables de entorno:

```
MONGO_URI=your_mongo_uri
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

4. Iniciar la aplicación con npm start

## Endpoints

### GET /api/movies

Devuelve una lista de películas.

Ejemplo de respuesta:

```
[{   
"_id": "616af6f8d6b76d6de25e496d",    
"original_title": "The Shawshank Redemption", 
"image_path": "https://res.cloudinary.com/liteflix/image/upload/v1633566157/movies/shawshank_redemption.jpg",
"release_date": "2023-04-12T00:00:00.000Z",
},
{
"_id": "616af8b4d6b76d6de25e496f",
"original_title": "The Godfather",
"image_path": "https://res.cloudinary.com/liteflix/image/upload/v1633566692/movies/the_godfather.jpg",
"release_date": "2023-04-12T00:00:00.000Z",
}]

```

### POST /api/movies

Permite subir una nueva película a la base de datos.

El endpoint acepta un archivo de imagen en formato multipart/form-data y el campo name como parte del body de la petición.

Ejemplo de petición:

```
POST /api/movies HTTP/1.1
Host: localhost:3000
Content-Type: multipart/form-data; boundary=--------------------------046071378651615436590000
Content-Length: 107244

----------------------------046071378651615436590000
Content-Disposition: form-data; name="name"

The Shawshank Redemption
----------------------------046071378651615436590000
Content-Disposition: form-data; name="image"; filename="shawshank_redemption.jpg"
Content-Type: image/jpeg

(binary data)
----------------------------046071378651615436590000--
```

Ejemplo de respuesta:

```
{
  "_id": "616af6f8d6b76d6de25e496d",
  "original_title": "The Shawshank Redemption",
  "image_path": "https://res.cloudinary.com/liteflix/image/upload/v1633566157/movies/shawshank_redemption.jpg",
  "release_date": "2023-04-12T00:00:00.000Z",
}

```
