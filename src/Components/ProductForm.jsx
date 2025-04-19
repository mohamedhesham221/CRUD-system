import React, { useState } from "react";
import Modal from "../utils/Modal";
import Input from "../utils/Input";
import LoadingSpinner from "../utils/LoadingSpinner";

const ProductForm = ({
  children,
  submitFn,
  title,
  productData,
  isLoading = false,
}) => {
  const [error, setError] = useState(false);
  function handleFormSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
    if (
      !data.name.trim().length ||
      !data.description.trim().length ||
      !data.price.trim().length ||
      !data.quantity.trim().length
    ) {
      setError(true);
    } else {
      setError(false);
      submitFn(data);
    }

    console.log(productData);
  }
  if (isLoading) return <LoadingSpinner />;
  return (
    <form
      className="bg-white text-[#183B4E] py-6 px-6 rounded-md"
      onSubmit={handleFormSubmit}
    >
      <h2 className="font-semibold mb-4 text-xl ">{title}</h2>
      {error && (
        <div>
          <p className="bg-red-500 text-white font-semibold text-xl text-center rounded-md py-1 mb-4">
            All field is required
          </p>
        </div>
      )}
      <Input
        defaultValue={productData?.name || ""}
        label="Name"
        id="name"
        type="text"
      />

      <Input
        defaultValue={productData?.category || ""}
        label="Category"
        id="category"
        type="text"
      />

      <Input
        defaultValue={productData?.description || ""}
        label="Description"
        id="description"
        istextArea
      />

      <Input
        defaultValue={productData?.price || ""}
        label="Price"
        id="price"
        type="text"
      />
      <Input
        defaultValue={productData?.quantity || ""}
        label="Quantity"
        id="quantity"
        type="text"
      />

      {children}
    </form>
  );
};

export default ProductForm;

//
//
