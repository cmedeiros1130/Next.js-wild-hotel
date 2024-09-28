/*import { getBookedDatesByCabinId, getCabin } from "@/app/_lib/data-service";

export async function GET(request, params) {
  const { cabinId } = params;

  try {
    const [cabin, bookedDates] = await Promise.all([
      getCabin(cabinId),
      getBookedDatesByCabinId(cabinId),
    ]);
    return Response.json({ cabin, bookedDates });
  } catch {
    return Response.json({ message: "Cabin not found" });
  }
}*/

export async function GET(request, params) {
  const { cabinId } = params;

  console.log("cabinId:", cabinId); // Add this line for debugging

  if (!cabinId) {
    return Response.json({ message: "Cabin ID is missing or invalid" });
  }

  try {
    const [cabin, bookedDates] = await Promise.all([
      getCabin(cabinId),
      getBookedDatesByCabinId(cabinId),
    ]);
    return Response.json({ cabin, bookedDates });
  } catch (error) {
    console.error("Error fetching cabin:", error); // Log the error
    return Response.json({ message: "Cabin not found" });
  }
}
