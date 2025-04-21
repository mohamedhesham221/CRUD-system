/* eslint-disable no-unused-vars */

import React from "react";
import Modal from "../utils/Modal";
import ProductForm from "./ProductForm";
import { useMutation } from "@tanstack/react-query";
import { createNewProduct } from "../utils/http";
import { queryClient } from "../main";
// =======
// import React from 'react'
// import Modal from '../utils/Modal'
// import ProductForm from './ProductForm';
// import { useMutation } from '@tanstack/react-query';
// import { createNewProduct } from '../utils/http';
// import { queryClient } from '../main';
// >>>>>>> develop:frontend/src/Components/AddProductModal.jsx

const AddProductModal = ({ show, onClose }) => {
  const { mutate, isPending, error, isError } = useMutation({
    mutationFn: createNewProduct,
    onSuccess: () => {
      onClose(); // Close the modal on successful submission
      queryClient.invalidateQueries(['products'])
    },
  });
  function handleAddRequest(formData) {
    mutate(formData);
  }
  return (
    <Modal visible={show} onClose={onClose}>
      <ProductForm title="Add a new Product" submitFn={handleAddRequest}>
        <div className="flex gap-3 justify-end mt-2">
          <button
            onClick={onClose}
            type="button"
            className="btn btn-outline btn-error hover:text-white"
            disabled={isPending}
          >
            Cancel
          </button>


          <button
            type="submit"
            className="btn bg-[#183B4E] text-white"
            disabled={isPending}
          >
            {isPending ? "Adding..." : "Add"}
          </button>
        </div>
      </ProductForm>
    </Modal>
  );
};
// =======

//     const { mutate, isPending, error, isError } = useMutation({
//         mutationFn: createNewProduct,
//         onSuccess: () => {
//             queryClient.invalidateQueries(['products'])
//             onClose(); // Close the modal on successful submission
//         }
//     })
//     function handleAddRequest(formData) {
//         mutate(formData)
//     }
//     return (
//         <Modal visible={show} onClose={onClose}>
//             <ProductForm title="Add a new Product" submitFn={handleAddRequest}>
//                 <div className='flex gap-3 justify-end mt-2'>
// >>>>>>> develop:frontend/src/Components/AddProductModal.jsx

export default AddProductModal;
