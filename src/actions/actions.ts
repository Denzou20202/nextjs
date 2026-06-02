'use server';

import { redirect } from 'next/navigation';
import { carsService } from '@/src/services/services';

export const createCarAction = async (
  formData: FormData
) => {

  const brand = formData.get('brand') as string;
  const year = Number(formData.get('year'));
  const price = Number(formData.get('price'));

  await carsService.create({
    brand,
    year,
    price,
  });

  redirect('/cars');
};