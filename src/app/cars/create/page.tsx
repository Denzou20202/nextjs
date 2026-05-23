import {CarForm} from "@/src/components/CarsForm";


const CreateCarPage = () => {

  return (
    <div className={'p-10'}>

      <h1 className={'text-3xl font-bold mb-5'}>
        Create Car
      </h1>

      <CarForm/>

    </div>
  );
};

export default CreateCarPage;