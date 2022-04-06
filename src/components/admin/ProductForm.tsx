import React from "react";

type Props = {};

const ProductForm = (props: Props) => {
  return (
    <div className="max-w-[700px] mx-auto my-5">
      <h3 className="font-semibold text-[3rem] text-blueGray-700">
        Add new cate
      </h3>
      <form className="text-left">
        <div className="mb-6">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@flowbite.com"
            // {...register("name", {
            //   required: { value: true, message: "Name is required" },
            //   minLength: 6,
            // })}
          />
          <p className="mt-2 text-sm text-red-600 dark:text-red-500">
            {/* {errors.name?.message} */}
          </p>
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ProductForm;
