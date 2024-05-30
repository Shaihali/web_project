export const Services = () => {
  const newsServices = {
    getNews: async (page: number) => {
      console.log("service", page);
      const response = await fetch(
        `http://localhost:3000/api/news?offset=${page - 1}&limit=6`
      );
      return await response.json();
    },
  };

  return {
    newsServices,
  };
};
