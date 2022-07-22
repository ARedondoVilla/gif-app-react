import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
  const [gifs, setGifs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const setGifList = async () => {
    const gifList = await getGifs(category);
    setGifs(gifList);
    setIsLoading(false);
  };

  useEffect(() => {
    setGifList();
  }, []);

  return {
    gifs,
    isLoading,
  };
};
