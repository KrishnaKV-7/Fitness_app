export const exerciseOptions = {
    method: 'GET',
    
    headers: {
      'content-type': 'application/octet-stream',
      'X-RapidAPI-Key': '7dc608d71cmsh3ba262953d52725p198e59jsnb1a4718ab8e2',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

  export const youtubeOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
      'X-RapidAPI-Key': 'f0021db587msh781fb1cbef39856p11c183jsn45521d5d1c85',
    },
  };

export const fetchData = async (url, options) => {

    const response = await fetch (url, options);
    const data = await response.json();

    return data;

};