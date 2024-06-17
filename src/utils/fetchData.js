export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "6c56d50ce6msh57a006105bce973p19133fjsn8993be572898",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};




export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'b621a7683cmsh5fdeee4298487e4p1ccaaejsn2eb22b90c2b2',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};




export const fetchData = async (url,options) =>{
    const response = await fetch(url,options);
    const data = await response.json();
    return data;

}