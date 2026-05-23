import { ICar } from '@/src/models/ICar';

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

  async create(car: ICar): Promise<ICar> {

    const response = await fetch(`${baseURL}/cars`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(car)
    });

    if (!response.ok) {
      throw new Error('Failed to create car');
    }

    return response.json();
  }
};