import { ICar } from '@/src/models/ICar';
import {redirect} from "next/navigation";

const baseURL = 'http://owu.linkpc.net/carsAPI/v1';

// запасний:
// const baseURL = 'http://185.69.152.209/carsAPI/v1';

export const carsService = {

  async getAll(): Promise<ICar[]> {

    const response = await fetch(`${baseURL}/cars`);

    if (!response.ok) {
      throw new Error('Failed to fetch cars');
    }

    return response.json();
  },
}

  export const createCarAction = async (formData: FormData) => {

    const brand = formData.get('brand');
    const year = Number(formData.get('year'));
    const price = Number(formData.get('price'));

    await fetch(`${baseURL}/cars`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },

      body: JSON.stringify({
        brand,
        year,
        price
      })
    });

    redirect('/cars');

  }