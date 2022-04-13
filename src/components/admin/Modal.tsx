import React from "react";
import { Link } from "react-router-dom";
import { getProduct } from "../../api/products";
type Props = {
  id: string | undefined;
  status: boolean;
};
const Modal = (prop: Props) => {
  const [productTarget, setProductTarget] = React.useState<any>({});
  const [modalStatus, setModalStatus] = React.useState(prop.status);
  const handleGetProduct = async (id: string | undefined) => {
    const product = await getProduct(id).then((response) => {
      setProductTarget(response.data);
    });
  };
  React.useEffect(() => {
    handleGetProduct(prop.id);
  }, []);
  return (
    <div>
      <div
        id="defaultModal"
        tabIndex={-1}
        aria-hidden="true"
        className={`h-modal fixed top-0 right-0 left-0 z-50 grid ${
          modalStatus ? "" : "hidden"
        } w-full items-center justify-center overflow-y-auto overflow-x-hidden bg-black bg-opacity-50 md:inset-0 md:h-full`}
      >
        <div className="relative h-full min-h-[500px] w-full min-w-[500px] max-w-2xl p-4 md:h-auto">
          <div className="relative rounded-lg bg-white shadow dark:bg-gray-700">
            <div className="flex items-start justify-between rounded-t border-b p-5 dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white lg:text-2xl">
                Product Detail
              </h3>
              <button
                type="button"
                className="ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-toggle="defaultModal"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>

            <div className="space-y-6 p-6">
              <p className="text-lg leading-relaxed text-gray-500 dark:text-gray-400">
                {productTarget.name}
              </p>
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                {productTarget.price}
              </p>
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                {productTarget.description}
              </p>
            </div>

            <div className="flex items-center space-x-2 rounded-b border-t border-gray-200 p-6 dark:border-gray-600">
              <Link to={"/admin/edit/" + productTarget._id}>
                <button
                  data-modal-toggle="defaultModal"
                  type="button"
                  className="rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Edit
                </button>
              </Link>
              <button
                data-modal-toggle="defaultModal"
                type="button"
                className="rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-900 focus:z-10 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:border-gray-500 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-600"
                onClick={() => setModalStatus(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
