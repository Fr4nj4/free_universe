export const getIdValue = (item: any, optionalValue: string): string => {
  console.log("🚀 ~ getTitleValue ~ item", item);

  return item?.unique_id?.number || optionalValue;
};
export const getMultiValue = (item: any): SelectType => {
  console.log("🚀 ~ getMultiValue ~ item", item);

  return item.multi_select.map((item: any) => ({
    value: item.id,
    label: item.name,
  }));
};

export const getSelectValue = (item: any): SelectType => {
  return {
    value: item.select.name,
    color: item.select.color,
  };
};

export const getTextValue = (item: any, optionalValue: string): string => {
  console.log("🚀 ~ getTextValue ~ item", item);

  return item.rich_text[0]?.plain_text || optionalValue;
};

export const getTitleValue = (item: any, optionalValue: string): string => {
  return item.title[0]?.plain_text || optionalValue;
};

export const getNumberValue = (item: any): number => {
  return item.number;
};

type SelectType = { value: string; color: string };
