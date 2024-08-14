import {
  getMultiValue,
  getNumberValue,
  getTextValue,
  getTitleValue,
  getIdValue,
} from "./types-converter";

export const getSeries = (response: any) => {
  const seriesItems = response.map((item: any) => {
    return {
      id: getIdValue(item.properties.id, ""),
      title: getTitleValue(
        item.properties.title,
        "No se ha proporcionado un titulo",
      ),
      description: getTextValue(item.properties.description, "Sin descripcion"),
      categories: getMultiValue(item.properties.category),
      link: getTextValue(
        item.properties.link,
        "No se ha proporcionado un link",
      ),
      year: getNumberValue(item.properties.year),
      image: getTextValue(item.properties.image, "Sin imagen"),
    };
  });

  return seriesItems;
};

export const getPeliculas = (response: any) => {
  const peliculasItems = response.map((item: any) => {
    return {
      id: getIdValue(item.properties.id, ""),
      title: getTitleValue(
        item.properties.title,
        "No se ha proporcionado un titulo",
      ),
      description: getTextValue(item.properties.description, "Sin descripcion"),
      categories: getMultiValue(item.properties.category),
      link: getTextValue(
        item.properties.link,
        "No se ha proporcionado un link",
      ),
      year: getNumberValue(item.properties.year),
      image: getTextValue(item.properties.image, "Sin imagen"),
    };
  });

  return peliculasItems;
};
