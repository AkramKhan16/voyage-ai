import axios from "axios";
 const pexelsApi=axios.create({
  baseURL:"https://api.pexels.com/v1",
  headers:{
    Authorization: import.meta.env.VITE_PEXELS_KEY
  },
 });
 export const getDestinationImage=async(destination)=>{
  try{
    const response=await pexelsApi.get('/search',{
      params:{query:destination,per_page:2},
    });
    return response.data.photos[1];
  }
  catch(error){
    console.log(error)
    return null
  }
 }


 export default pexelsApi