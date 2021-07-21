import axios, { AxiosResponse } from 'axios';

import { Languages } from '../types';

interface ResponseData {
  data: { detections: Array<Array<{ language: string }>> };
}

const detectLanguage = async (text: string): Promise<Languages> => {
  try {
    const { data: result } = await axios.post<ResponseData, AxiosResponse<ResponseData>>(
      `https://translation.googleapis.com/language/translate/v2/detect?q=${text}&key=AIzaSyDnEjxJ2_Lk0SiuGWpW9f13xygv82rOnyk`,
      {
        method: 'POST',
      },
    );

    return Promise.resolve(result.data.detections[0][0].language) as Promise<Languages>;
  } catch (e) {
    console.error(e.message);
    throw new Error(e);
  }
};

export { detectLanguage };
