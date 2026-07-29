import { GoogleGenAI } from "@google/genai";

const ai=new GoogleGenAI({
  apiKey: import.meta.env.VITE_GEMINI_KEY
  })
  
export const generateTrip = async (trip) => {
  try{
    const prompt = ` Create a ${trip.days}-day travel itinerary for ${trip.destination}.  Travelers: ${trip.travellers} Travel Style: ${trip.travelStyle}  Interests: ${trip.interests.join(", ")}
            Return ONLY valid JSON.
Format:

{
"itinerary":[
{
"day":1,

"title":"",

"place":"",

"distanceFromPrevious":"",

"travelTime":"",

"transport":"",

"transportCost":"",

"entryFee":"",

"bestTime":"",

"stayDuration":"",

"type":"",

"activities":[
{
      "name":"",
      "time":"",
      "duration":"",
      "cost":"",
      "description":""
    }
],

"fact":""
}
],

"restaurants":[
{
"name":"",
"mustTry":"",
"price":"Estimated average cost for one person in INR",
"rating":"4.8"
}
],

"tips":[]
}
`;
const response = await ai.models.generateContent({
  model: "gemini-3.5-flash",
  contents: prompt,
});
const text = response.text
  .replace(/```json/g, "")
  .replace(/```/g, "")
  .trim();
    return JSON.parse(text);
  }
  catch(error){
    console.log("Gemini error: ",error);
    return null;
  }
}