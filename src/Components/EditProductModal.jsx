import React from 'react'
import Modal from '../utils/Modal'
import ProductForm from './ProductForm'
import { useMutation } from '@tanstack/react-query'
import { updateProduct } from '../utils/http'
import { queryClient } from '../main'

const EditProductModal = ({ show, onClose, productData, isLoading }) => {
    const { mutate } = useMutation({
        mutationFn: updateProduct,
        onSuccess: () => {
            queryClient.invalidateQueries(['products']);
            onClose();
        }
    })
    function handleEditRequest(formData) {
        mutate({
            id: productData?.id,
            ...formData
        });
    }

    return (
        <Modal visible={show} onClose={onClose}>
            <ProductForm isLoading={isLoading} productData={productData} title="Edit Product" submitFn={handleEditRequest}>
                <div className='flex gap-3 justify-end mt-2'>
                    <button onClick={onClose} type='button' className='btn btn-outline btn-error'>Cancel</button>
                    <button className='btn  bg-[#183B4E] text-white'>Edit</button>
                </div>
            </ProductForm>
        </Modal>
    )
}

export default EditProductModal