import { ArrowLeftIcon } from "@heroicons/react/solid";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getAllCate } from "../../api/category";
import { addProduct, editProduct, getProduct } from "../../api/products";
import { PRODUCT_TYPE } from "../../types/ProductType";

const ProductForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [imageThumb, setImage] = useState<string>("");
  const [cate, setCate] = useState<any[]>([]);
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
      status: 0,
      feature: false,
    },
  });

  const handleCreateProduct = (data: PRODUCT_TYPE) => {
    addProduct(data)
      .then(() => {
        alert("Thêm sản phẩm thành công");
        navigate("/admin/products");
      })
      .catch((err) => {
        alert("Thêm sản phẩm thất bại");
        console.log(err);
      });
  };
  const handleUpdateProduct = async (data: PRODUCT_TYPE) => {
    const response = await editProduct(id, data);
    if (response.status === 200) {
      alert("Cập nhật sản phẩm thành công");
      navigate("/admin/products");
    } else {
      alert("Cập nhật sản phẩm thất bại");
    }
  };
  const handleGetCate = async () => {
    const response = await getAllCate();
    if (response.status === 201) {
      setCate(response.data);
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
    reset({ ...product.data, status: product.data.status.toString() });
    setImage(product.data.image);
  };
  const onSubmit: SubmitHandler<PRODUCT_TYPE> = (data: PRODUCT_TYPE) => {
    const submitData = {
      ...data,
      status: +data.status,
      image: imageThumb,
    };
    if (id) {
      return handleUpdateProduct(submitData);
    }
    return handleCreateProduct(submitData);
  };
  useEffect(() => {
    handleGetCate();
  }, []);

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
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="name"
                        className="mb-2 block text-sm font-medium text-gray-900"
                      >
                        Product Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 shadow-sm focus:border-cyan-600 focus:ring-cyan-600 sm:text-sm"
                        placeholder="Apple Imac 27”"
                        {...register("name", {
                          required: {
                            value: true,
                            message:
                              "Name is required and must be at least 3 characters",
                          },
                          minLength: 5,
                        })}
                      />
                      <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                        {errors.name?.message}
                      </p>
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="category"
                        className="mb-2 block text-sm font-medium text-gray-900"
                      >
                        Category
                      </label>
                      <select
                        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 shadow-sm focus:border-cyan-600 focus:ring-cyan-600 sm:text-sm"
                        id="category"
                        {...register("category", {})}
                      >
                        {cate.map((item) => (
                          <option key={item._id} value={item._id}>
                            {item.name}
                          </option>
                        ))}
                      </select>
                      <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                        {errors.category?.message}
                      </p>
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
                        id="price"
                        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 shadow-sm focus:border-cyan-600 focus:ring-cyan-600 sm:text-sm"
                        placeholder="$2300"
                        {...register("price", {
                          required: {
                            value: true,
                            message: "Price is required",
                          },
                        })}
                      />
                      <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                        {errors.price?.message}
                      </p>
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="image"
                        className="mb-2 block text-sm font-medium text-gray-900"
                      >
                        Thumbnail
                      </label>
                      <input
                        type="file"
                        name="image"
                        id="iamge"
                        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-[7px] text-gray-900 shadow-sm focus:border-cyan-600 focus:ring-cyan-600 sm:text-sm"
                        placeholder="Electronics"
                        onChange={(e) => uploadToClient(e)}
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="brand"
                        className="mb-2 block text-sm font-medium text-gray-900"
                      >
                        Status
                      </label>
                      <select
                        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 shadow-sm focus:border-cyan-600 focus:ring-cyan-600 sm:text-sm"
                        id="brand"
                        {...register("status", {
                          required: {
                            value: true,
                            message: "Status is required",
                          },
                        })}
                      >
                        <option value="1">Active</option>
                        <option value="0">Inactive</option>
                      </select>
                      <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                        {errors.status?.message}
                      </p>
                    </div>
                    <div className="col-span-6 flex items-center space-x-4 sm:col-span-3">
                      <label
                        htmlFor="featured"
                        className=" block w-max text-sm font-medium text-gray-900"
                      >
                        Featured Product ?
                      </label>
                      <input
                        type="radio"
                        id="feature"
                        className="inline-block rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 shadow-sm focus:border-cyan-600 focus:ring-cyan-600 sm:text-sm"
                        placeholder="$2300"
                        {...register("feature", {})}
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
                        {...register("description", {})}
                      ></textarea>
                    </div>
                  </div>
                  <div className="rounded-b  border-t border-gray-200 p-6 px-0">
                    <button
                      className="rounded-lg bg-cyan-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200"
                      type="submit"
                    >
                      {id ? "Update" : "Add product"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-3 flex h-full w-full items-center justify-center overflow-hidden rounded-lg bg-white p-4 py-10 md:h-auto">
          <img
            src={
              imageThumb
                ? imageThumb
                : "https://reactnativecode.com/wp-content/uploads/2018/02/Default_Image_Thumbnail.png"
            }
            alt=""
            className="max-h-[300px] max-w-full object-contain "
          />
        </div>
      </div>
    </>
  );
};

export default ProductForm;
