export const exerciseOptions = {
    method: 'GET',
    
    headers: {
      'content-type': 'application/octet-stream',
      'X-RapidAPI-Key': '',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

export const fetchData = async (url, options) => {

    const response = await fetch (url, options);
    const data = await response.json();

    return data;

