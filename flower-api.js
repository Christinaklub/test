const URL = "https://khlozvoopodynucbuhox.supabase.co/rest/v1/flowers"
const apikey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtobG96dm9vcG9keW51Y2J1aG94Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQwMDI1NTgsImV4cCI6MjAwOTU3ODU1OH0.lc9AkTRet-eNHPy6SkSMGASxrBZH94rrV_YpMm_8274"

 export async function fetchFlowers (){
   const response = await fetch(URL,{
    headers: {
        apikey: apikey,
    },
   });
   const body = await response.json();
   console.log(body);

   return body;
}

 export async function postFlower(data) {
const response = await fetch(URL,{
  method: "POST",
  headers: {
    apikey: apikey,
    "Content-Type": "application/json", 
  },
  body: JSON.stringify(data),
});
console.log (response);
const body = await response.json();
console.log (body)

return body;

}