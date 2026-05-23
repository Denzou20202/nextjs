import {createCarAction} from "@/src/services/services";


export const CarForm = () => {

  return (
    <form
      action={createCarAction}
      className={'flex flex-col gap-4 max-w-md'}
    >

      <input
        type="text"
        name="brand"
        placeholder="Brand"
        required
        className={'border p-2 rounded'}
      />

      <input
        type="number"
        name="year"
        placeholder="Year"
        required
        className={'border p-2 rounded'}
      />

      <input
        type="number"
        name="price"
        placeholder="Price"
        required
        className={'border p-2 rounded'}
      />

      <button
        type="submit"
        className={'bg-black text-white p-2 rounded'}
      >
        Create Car
      </button>

    </form>
  );
};