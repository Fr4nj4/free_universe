export const getEmulationItems = (response: any) => {
  const emulationItems = response.map((item: any) => {
    return {
      id: item.id,
      consola: getSelectValue(item.properties.Consola),
      categoria: getSelectValue(item.properties.Categoria),
      calificacion: getNumberValue(item.properties.Calificacion),
      comentarios: getTextValue(item.properties.Comentarios, "Sin comentarios"),
      link: getTextValue(
        item.properties.Link,
        "No se ha proporcionado un link"
      ),
      nombre: getTitleValue(item.properties.Nombre, "Sin nombre"),
    };
  });
  return emulationItems;
};

const getSelectValue = (item: any): SelectType => {
  return {
    value: item.select.name,
    color: item.select.color,
  };
};

const getTextValue = (item: any, optionalValue: string): string => {
  return item.rich_text[0]?.plain_text || optionalValue;
};

const getTitleValue = (item: any, optionalValue: string): string => {
  return item.title[0]?.plain_text || optionalValue;
};

const getNumberValue = (item: any): number => {
  return item.number;
};

type SelectType = { value: string; color: string };
