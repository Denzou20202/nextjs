import { carsService } from '@/src/services/services';
import { CarsList } from '@/src/components/CarsList';

const CarsPage = async () => {

  const cars = await carsService.getAll();

  return (
    <div className={'p-10'}>

      <h1 className={'text-3xl font-bold mb-5'}>
        Cars
      </h1>

      <CarsList cars={cars}/>
    </div>
  );
};

export default CarsPage;