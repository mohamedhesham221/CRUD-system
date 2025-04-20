/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LoadingSpinner from "../utils/LoadingSpinner";
import Error from "../utils/Error";
import EditProductModal from "../Components/EditProductModal";
import { useQuery } from "@tanstack/react-query";
import { fetchProducts, getProductById } from "../utils/http";
import updateIcon from "../assets/edit-icon.png";
import deleteIcon from "../assets/delete-icon.png";
import viewIcon from "../assets/view-icon.png";
import DeleteProductModal from "../Components/DeleteProductModal";

const Products = () => {
	const [showEditModal, setShowEditModal] = useState(false);
	const [editProductId, setEditProductId] = useState(null);
	const [deletedProductID, setDeletedProductID] = useState(null);
	const {
		data: productData,
		isLoading,
		isError: editError,
	} = useQuery({
		queryFn: () => getProductById(editProductId),
		queryKey: ["products", editProductId],
		enabled: !!editProductId,
	});
	function handleCloseEdit() {
		setShowEditModal(false);
		setEditProductId(null);
	}
	function handleEditData(id) {
		setEditProductId(id);
		setShowEditModal(true);
	}
	const { data, isPending, error, isError } = useQuery({
		queryFn: fetchProducts,
		queryKey: ["products"],
	});

	if (isPending) return <LoadingSpinner />;

	if (isError) return <Error errorMsg={error} />;

	return (
		<section>
			<form className="flex flex-col md:flex-row gap-3 justify-between items-center">
				{/* Search input */}
				<label className="input rounded-full" style={{ outline: "none" }}>
					<svg
						className="h-[1em] opacity-50"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
					>
						<g fill="none" stroke="currentColor">
							<circle cx="11" cy="11" r="8"></circle>
							<path d="m21 21-4.3-4.3"></path>
						</g>
					</svg>
					<input type="search" required placeholder="Search" />
				</label>
				{/* Select filter */}
				<select
					defaultValue="Filter by"
					className="select rounded-full outline-none focus:outline-none focus:ring-0"
				>
					<option disabled={true}>Filter by</option>
					<option>Option 1</option>
					<option>Option 2</option>
					<option>Option 3</option>
				</select>
			</form>
			<div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100 mt-5">
				<table className="table">
					<thead>
						<tr className="text-center bg-[#183B4E] text-white">
							<th className="text-lg md:text-2xl">Name</th>
							<th className="text-lg md:text-2xl">Category</th>
							<th className="text-lg md:text-2xl">Quantity</th>
							<th className="text-lg md:text-2xl">Price</th>
							<th className="text-lg md:text-2xl">Actions</th>
						</tr>
					</thead>

					<tbody>
						{data.length === 0 && (
							<tr>
								<td
									colSpan="5"
									className="text-center text-3xl font-bold py-10"
								>
									No products Found
								</td>
							</tr>
						)}
						{data.map((product) => (
							<tr
								key={product.id}
								className="text-center even:bg-[#fcfcfc] hover:bg-gray-300 cursor-pointer"
							>
								<td className="text-lg md:text-2xl">{product.name}</td>
								<td className="text-lg md:text-2xl">{product.category}</td>
								<td className="text-lg md:text-2xl">{product.quantity}</td>
								<td className="text-lg md:text-2xl">{product.price}</td>
								<td className="border-l-1 border-gray-100">
									<div className="flex gap-2 justify-center">
										<button
											className="btn btn-soft btn-info group"
											onClick={() => handleEditData(product.id)}
										>
											<img
												src={updateIcon}
												alt="Edit icon"
												className="group-hover:brightness-500 transition-all duration-300 "
											/>
										</button>
										<button
											className="btn btn-soft btn-error group"
											onClick={() => {
												document.getElementById("delete_modal").showModal();
												setDeletedProductID(product.id);
											}}
										>
											<img
												src={deleteIcon}
												alt="Edit icon"
												className="group-hover:brightness-500 transition-all duration-300 "
											/>
										</button>
											<Link key={product.id} to={`/product/${product.id}`} className="btn btn-soft btn-warning group">
												<img src={viewIcon} alt="View Icon" className="group-hover:brightness-500 transition-all duration-300"/>
											</Link>
									</div>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
			<EditProductModal
				isLoading={isLoading}
				productData={productData}
				show={showEditModal}
				onClose={handleCloseEdit}
			/>
			<DeleteProductModal productID={deletedProductID} />
		</section>
	);
};

export default Products;
