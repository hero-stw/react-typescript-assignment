import { ArrowLeftIcon } from "@heroicons/react/solid";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate, useParams } from "react-router-dom";
import { addProduct, editProduct, getProduct } from "../../api/products";
import { PRODUCT_TYPE } from "../../types/ProductType";

const ProductForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [imageThumb, setImage] = useState<string>("");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      name: "",
      price: "",
      description: "",
      image: "",
      category: "",
      status: false,
      feature: false,
    },
  });

  const handleCreateProduct = (data: PRODUCT_TYPE) => {
    addProduct(data)
      .then(() => {
        alert("Thêm sản phẩm thành công");
        navigate("/admin");
      })
      .catch((err) => {
        alert("Thêm sản phẩm thất bại");
      });
  };
  const handleUpdateProduct = async (data: PRODUCT_TYPE) => {
    const response = await editProduct(id, data);
    if (response.status === 200) {
      alert("Cập nhật sản phẩm thành công");
      navigate("/admin");
    } else {
      alert("Cập nhật sản phẩm thất bại");
    }
  };
  const uploadToClient = (event: any) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "fckljd3m");

      axios({
        url: "https://api.cloudinary.com/v1_1/ecma-assignment/image/upload",
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-formendcoded",
        },
        data: formData,
      }).then((data) => {
        setImage(data.data.secure_url);
      });
    }
  };

  const handleGetProduct = async (id: string) => {
    const product = await getProduct(id);
    reset(product.data);
    setImage(product.data.image);
  };
  const onSubmit: SubmitHandler<PRODUCT_TYPE> = (data: PRODUCT_TYPE) => {
    const submitData = {
      ...data,
      image: imageThumb,
    };
    if (id) {
      return handleUpdateProduct(submitData);
    }
    return handleCreateProduct(submitData);
  };
  useEffect(() => {
    if (id) {
      handleGetProduct(id);
    }
  }, [id]);
  return (
    <>
      <div
        id="main-content"
        className="relative grid h-screen w-full grid-cols-12 items-start overflow-y-auto bg-gray-50 pt-10 lg:ml-64"
      >
        <div
          className="relative col-span-8 h-80  w-full items-center justify-center overflow-y-auto overflow-x-hidden sm:h-full"
          id="add-product-modal"
          aria-hidden="true"
        >
          <div className="relative h-full w-full max-w-full px-4 md:h-auto">
            <div className="relative rounded-lg bg-white shadow">
              <div className="flex items-start justify-between rounded-t border-b p-5">
                <h3 className="text-xl font-semibold">
                  {id ? "Edit Product" : "Add product"}
                </h3>
                <button
                  type="button"
                  className="ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900"
                  data-modal-toggle="add-product-modal"
                >
                  <Link to="/admin">
                    <ArrowLeftIcon className="h-5 w-5" />
                  </Link>
                </button>
              </div>

              <div className="space-y-6 p-6">
                <form action="#">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="product-name"
                        className="mb-2 block text-sm font-medium text-gray-900"
                      >
                        Product Name
                      </label>
                      <input
                        type="text"
                        name="product-name"
                        id="product-name"
                        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 shadow-sm focus:border-cyan-600 focus:ring-cyan-600 sm:text-sm"
                        placeholder="Apple Imac 27”"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="category"
                        className="mb-2 block text-sm font-medium text-gray-900"
                      >
                        Category
                      </label>
                      <input
                        type="text"
                        name="category"
                        id="category"
                        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 shadow-sm focus:border-cyan-600 focus:ring-cyan-600 sm:text-sm"
                        placeholder="Electronics"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="brand"
                        className="mb-2 block text-sm font-medium text-gray-900"
                      >
                        Brand
                      </label>
                      <input
                        type="text"
                        name="brand"
                        id="brand"
                        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 shadow-sm focus:border-cyan-600 focus:ring-cyan-600 sm:text-sm"
                        placeholder="Apple"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="price"
                        className="mb-2 block text-sm font-medium text-gray-900"
                      >
                        Price
                      </label>
                      <input
                        type="number"
                        name="price"
                        id="price"
                        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 shadow-sm focus:border-cyan-600 focus:ring-cyan-600 sm:text-sm"
                        placeholder="$2300"
                      />
                    </div>
                    <div className="col-span-full">
                      <label
                        htmlFor="product-details"
                        className="mb-2 block text-sm font-medium text-gray-900"
                      >
                        Product Details
                      </label>
                      <textarea
                        id="product-details"
                        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-4 text-gray-900 focus:border-cyan-600 focus:ring-cyan-600 sm:text-sm"
                        placeholder="e.g. 3.8GHz 8-core 10th-generation Intel Core i7 processor, Turbo Boost up to 5.0GHz, Ram 16 GB DDR4 2300Mhz"
                      ></textarea>
                    </div>
                  </div>
                </form>
              </div>

              <div className="rounded-b  border-t border-gray-200 p-6">
                <button
                  className="rounded-lg bg-cyan-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200"
                  type="submit"
                >
                  Add product
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-3 flex h-full w-full items-center justify-center overflow-hidden rounded-lg bg-white p-4 py-10 md:h-auto">
          <img
            src="https://source.unsplash.com/random"
            alt=""
            className="max-h-[300px] max-w-full object-contain "
          />
        </div>
      </div>
    </>
  );
};

export default ProductForm;
