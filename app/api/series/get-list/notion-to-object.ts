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

const getIdValue = (item: any, optionalValue: string): string => {
  console.log("🚀 ~ getTitleValue ~ item", item);
  return item?.unique_id?.number || optionalValue;
};
const getMultiValue = (item: any): SelectType => {
  console.log("🚀 ~ getMultiValue ~ item", item);

  return item.multi_select.map((item: any) => ({
    value: item.id,
    label: item.name,
  }));
};

const getSelectValue = (item: any): SelectType => {
  return {
    value: item.select.name,
    color: item.select.color,
  };
};

const getTextValue = (item: any, optionalValue: string): string => {
  console.log("🚀 ~ getTextValue ~ item", item);
  return item.rich_text[0]?.plain_text || optionalValue;
};

const getTitleValue = (item: any, optionalValue: string): string => {
  return item.title[0]?.plain_text || optionalValue;
};

const getNumberValue = (item: any): number => {
  return item.number;
};

type SelectType = { value: string; color: string };
