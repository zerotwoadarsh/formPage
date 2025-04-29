import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const FormPage = () => {
  const form = useForm();
  const { register, handleSubmit, formState, reset, watch } = form;
  const { errors } = formState;

  const fields = ["name", "rollNumber", "preference1", "preference2", "preference3"];
  const formData = watch();

  const filledFields = fields.filter(
    (field) => formData[field]?.trim() && !errors[field]
  ).length;


  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await fetch('http://localhost:3001/submit/formPage', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
  
      const result = await response.json();
  
      if (response.ok) {
        reset();
        navigate('/display', { state: result }); 
      } else {
        console.error(result.message || 'Error submitting form');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  

  return (
    <div className='flex flex-col items-center justify-center'>
      <h1 className="text-3xl font-bold mb-6 text-gray-800 flex justify-center items-center">Preference Form</h1>

      <div className="flex flex-row items-center justify-center w-full min-h-screen px-4 bg-gray-100 py-6">
        <div className='flex flex-col justify-center items-center sm:w-2/3 w-full bg-white shadow-lg rounded-lg space-y-4'>
          <form
            className="flex flex-col w-full p-6 bg-white shadow-lg rounded-lg space-y-4"
            noValidate
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex flex-col space-y-1">
              <label htmlFor="name" className="text-gray-700">Name</label>
              <input
                type="text"
                id="name"
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                {...register("name", { required: "Name is required" })}
              />
              <p className="text-red-500 text-sm">{errors.name?.message}</p>
            </div>

            <div className="flex flex-col space-y-1">
              <label htmlFor="rollNumber" className="text-gray-700">Roll Number</label>
              <input
                type="number"
                id="rollNumber"
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                {...register("rollNumber", { required: "Roll Number is required" })}
              />
              <p className="text-red-500 text-sm">{errors.rollNumber?.message}</p>
            </div>

            <div className="flex flex-col space-y-1">
              <label htmlFor="preference1" className="text-gray-700">Preference 1</label>
              <input
                type="text"
                id="preference1"
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                {...register("preference1", { required: "Preference 1 is required" })}
              />
              <p className="text-red-500 text-sm">{errors.preference1?.message}</p>
            </div>

            <div className="flex flex-col space-y-1">
              <label htmlFor="preference2" className="text-gray-700">Preference 2</label>
              <input
                type="text"
                id="preference2"
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                {...register("preference2", { required: "Preference 2 is required" })}
              />
              <p className="text-red-500 text-sm">{errors.preference2?.message}</p>
            </div>

            <div className="flex flex-col space-y-1">
              <label htmlFor="preference3" className="text-gray-700">Preference 3</label>
              <input
                type="text"
                id="preference3"
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                {...register("preference3", { required: "Preference 3 is required" })}
              />
              <p className="text-red-500 text-sm">{errors.preference3?.message}</p>
            </div>

            <div className='flex justify-between'>
              <button
                onClick={() => reset()}
                type='button'
                className='mt-4 py-2 px-8 bg-red-500 text-white font-bold rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-blue-500'>
                Reset
              </button>
              <button
                type='submit'
                className="mt-4 py-2 px-8 bg-green-500 text-white font-bold rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormPage;
