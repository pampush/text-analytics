const baseURL = 'https://tmgwebtest.azurewebsites.net/api/textstrings/';

/**
 * fetch multiple texts from API by id. Actually, using axios instead of
 * fetch is much more convenient. But just for one query we don't want to import library
 * @param ids text identifiers
 */
const getText = async (ids: number[]) => {
  const responsePromises: Array<Promise<Response>> = [];
  console.log(ids);

  ids.forEach((id) => {
    responsePromises.push(
      fetch(`${baseURL}${id}`, {
        method: 'GET',
        mode: 'cors',
        headers: {
          'TMG-Api-Key': '0J/RgNC40LLQtdGC0LjQutC4IQ==',
        },
      }),
    );
  });

  try {
    const dataPromises: Array<Promise<Response>> = [];
    const rawData = await Promise.all(responsePromises);
    rawData.forEach((data) => dataPromises.push(data.json()));

    const data = await Promise.all(dataPromises);
    return data;
  } catch (e) {
    //TODO: notification
    console.error(e.message);
  }
};

export { getText };
