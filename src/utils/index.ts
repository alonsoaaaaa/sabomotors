//TODO: Implement the fetchCars function
// import { CarProps, FilterProps } from "../types";

// // export async function fetchCars(filters: FilterProps) {
// //   const { manufacturer, year, model, limit, fuel } = filters;
// export async function fetchCars() {
//   // Set the required headers for the API request
//   const headers: HeadersInit = {
//     "X-RapidAPI-Key":
//       "91073ebb7bmsh42e1939d1cee90cp14ff30jsn7eb51337dad7" || "",
//     "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
//   };

//   // Set the required headers for the API request
//   const response = await fetch(
//     // `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`,
//     `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=Hyundai&limit=100&year=2018`,

//     {
//       headers: headers,
//     }
//   );

//   // Parse the response as JSON
//   const result = await response.json();

//   return result;
// }

// export const generateCarImageUrl = (car: CarProps, angle?: string) => {
//   const url = new URL("https://cdn.imagin.studio/getimage");
//   const { make, model, year } = car;

//   url.searchParams.append(
//     "customer",
//     process.env.NEXT_PUBLIC_IMAGIN_API_KEY || ""
//   );
//   url.searchParams.append("make", make);
//   url.searchParams.append("modelFamily", model.split(" ")[0]);
//   url.searchParams.append("zoomType", "fullscreen");
//   url.searchParams.append("modelYear", `${year}`);
//   // url.searchParams.append('zoomLevel', zoomLevel);
//   url.searchParams.append("angle", `${angle}`);

//   return `${url}`;
// };
