export default async function createImageUrl(image: any) {
  debugger;
  // const urlArray = [];
  const formData = new FormData();
  console.log("Access key: " + process.env.DO_SECRET_KEY);
  console.log("Secret key: " + process.env.DO_ACCESS_KEY);
  console.log("Imagen recibida en el createImageUrl: ", image);
  formData.append("image", image);
  const response = await fetch(
    "http://www.seminuevossabomotors.com/api/upload",
    {
      method: "POST",
      body: formData,
    }
  );
  const data = await response.json();
  const imgUrl = data.imageUrl;

  console.log("URL devuelto por la API route: ", imgUrl);
  return imgUrl;
}
