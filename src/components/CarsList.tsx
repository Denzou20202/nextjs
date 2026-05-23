import { ICar } from '@/src/models/ICar';

interface Props {
  cars: ICar[];
}

export const CarsList = ({ cars }: Props) => {

  return (
    <div className={'grid gap-4'}>
      {
        cars.map(car => (
          <div
            key={car.id}
            className={'border rounded p-4 shadow'}
          >
            <h2 className={'text-xl font-bold'}>
              {car.brand}
            </h2>

            <p>Year: {car.year}</p>

            <p>Price: ${car.price}</p>
          </div>
        ))
      }
    </div>
  );
};