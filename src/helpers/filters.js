export const filterByCategory = (categoryName, data) => {
  let subcategories = [];

  Object.entries(data).forEach((e) => {
    const [key, value] = e;
    if (key === categoryName) {
      subcategories = Object.entries(value);
    }
  });

  return subcategories;
};
