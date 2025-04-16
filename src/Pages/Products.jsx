/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import LoadingSpinner from '../utils/LoadingSpinner'
import Error from '../utils/Error'
import EditProductModal from '../Components/EditProductModal'
import { useQuery } from '@tanstack/react-query'
import { fetchProducts, getProductById } from '../utils/http'


const Products = () => {
    const [showEditModal, setShowEditModal] = useState(false)
    const [editProductId, setEditProductId] = useState(null)

    const { data: productData, isLoading, isError: editError } = useQuery({
        queryFn: () => getProductById(editProductId),
        queryKey: ['products', editProductId],
        enabled: !!editProductId
    })
    function handleCloseEdit() {
        setShowEditModal(false)
        setEditProductId(null);
    }
    function handleEditData(id) {
        setEditProductId(id)
        setShowEditModal(true)
    }
    const { data, isPending, error, isError } = useQuery({
        queryFn: fetchProducts,
        queryKey: ['products']
    })



    if (isPending) return <LoadingSpinner />

    if (isError) return <Error errorMsg={error} />



    return (
        <section>

            <table className='bg-gray-400 mt-10 w-[85%] mx-auto'>
                <thead>
                    <tr className='text-center'>
                        <th>Name</th>
                        <th>category</th>
                        <th>Quantity</th>
                        <th>price</th>
                        <th colSpan="2">Actions</th>
                    </tr>
                </thead>


                <tbody>
                    {data.length === 0 && <tr><td colSpan="5">
                        No products Found
                    </td></tr>}
                    {
                        data.map(product => <tr key={product.id} className='text-center'>
                            <td>{product.name}</td>
                            <td>{product.category}</td>
                            <td>{product.quantity}</td>
                            <td>{product.price}</td>
                            <td colSpan="2">
                                <div className="flex gap-2 justify-center">
                                    <button className='btn btn-info' onClick={() => handleEditData(product.id)}>Edit</button>
                                    <button className='btn btn-error'>Delete</button>
                                </div>
                            </td>
                        </tr>)

                    }
                </tbody>



            </table>
            <EditProductModal isLoading={isLoading} productData={productData} show={showEditModal} onClose={handleCloseEdit} />
        </section>
    )
}

export default Products