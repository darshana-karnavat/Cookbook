import { createClient } from 'contentful';

const useContentful = () => {
  const client = createClient({
    space: process.env.REACT_APP_CONTENTFUL_SPACE,
    accessToken: process.env.REACT_APP_CONTENTFUL_TOKEN,
    host: 'preview.contentful.com',
  });

  const getRecipes = async () => {
    try {
      const recipes = await client.getEntries({
        content_type: 'recipe',
        select: 'fields',
      });

      const sanitizedRecipes = recipes.items.map((i) => {
        const title = i.fields.title;
        const shortDescription = i.fields.shortDescription;
        const ingredients = i.fields.ingredients;
        const description = i.fields.description;
        const dishImage = i.fields.dishImage.fields.file.url;
        return {
          title,
          shortDescription,
          ingredients,
          description,
          dishImage,
        };
      });
      return sanitizedRecipes;
    } catch (error) {
      console.log(error);
    }
  };
  return { getRecipes };
};

export default useContentful;
