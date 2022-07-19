import { createClient } from 'contentful';

const useContentful = () => {
  const client = createClient({
    space: 'akchf90dymd7',
    accessToken: '6EEocpKKkzOcYecLQ663nwTyRz1gD4QQHrM6F3D2sBc',
    host: 'preview.contentful.com',
  });

  const getTitles = async () => {
    try {
      const entries = await client.getEntries({
        content_type: 'recipe',
        select: 'fields',
      });

      const sanitizedEntries = entries.items.map((item) => {
        const ingredients = item.fields.ingredients;
        const title = item.fields.dishPhoto.fields.title;
        const shortDescription = item.fields.dishPhoto.fields.description;
        const foto = item.fields.dishPhoto.fields.file.url;
        const info = item.fields.atGlanceInfo;
        const procedure = item.fields.procedure;

        return {
          ingredients,
          title,
          shortDescription,
          foto,
          info,
          procedure,
        };
      });

      return sanitizedEntries;
    } catch (error) {
      console.log(`${error}`);
    }
  };
  return { getTitles };
};

export default useContentful;
