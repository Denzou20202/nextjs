'use client';

import { useRouter } from 'next/navigation';
import { carsService } from '@/src/services/services';

import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';

import {
  carSchema,
  CarSchemaType
} from '@/src/validators/validator';

export const CarForm = () => {

  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<CarSchemaType>({
    resolver: zodResolver(carSchema),

    defaultValues: {
      brand: '',
      model: '',
      year: 2000,
      price: 0
    }
  });

  const onSubmit = async (data: CarSchemaType) => {

    await carsService.create(data);

    router.push('/cars');
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={'flex flex-col gap-4 max-w-md'}
    >

      <div>
        <input
          type="text"
          placeholder="Brand"
          {...register('brand')}
          className={'border p-2 rounded w-full'}
        />

        {
          errors.brand && (
            <p className={'text-red-500 text-sm mt-1'}>
              {errors.brand.message}
            </p>
          )
        }
      </div>

      <div>
        <input
          type="text"
          placeholder="Model"
          {...register('model')}
          className={'border p-2 rounded w-full'}
        />

        {
          errors.model && (
            <p className={'text-red-500 text-sm mt-1'}>
              {errors.model.message}
            </p>
          )
        }
      </div>

      <div>
        <input
          type="number"
          placeholder="Year"
          {...register('year', {
            valueAsNumber: true
          })}
          className={'border p-2 rounded w-full'}
        />

        {
          errors.year && (
            <p className={'text-red-500 text-sm mt-1'}>
              {errors.year.message}
            </p>
          )
        }
      </div>

      <div>
        <input
          type="number"
          placeholder="Price"
          {...register('price', {
            valueAsNumber: true
          })}
          className={'border p-2 rounded w-full'}
        />

        {
          errors.price && (
            <p className={'text-red-500 text-sm mt-1'}>
              {errors.price.message}
            </p>
          )
        }
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className={'bg-black text-white p-2 rounded disabled:opacity-50'}
      >
        {
          isSubmitting
            ? 'Creating...'
            : 'Create Car'
        }
      </button>

    </form>
  );
};