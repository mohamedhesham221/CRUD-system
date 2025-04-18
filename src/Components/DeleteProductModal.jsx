import React from "react";
import { deleteProduct } from "../utils/http";
import deleteIcon from "../assets/close-icon.png";
const DeleteProductModal = ({ productID }) => {
	return (
		<dialog id="delete_modal" className="modal">
			<div className="modal-box text-center">
				<img
					src={deleteIcon}
					alt="Delete icon"
					className="w-12 lg:w-24 mx-auto mb-5"
				/>
				<h3 className="font-bold text-lg">Are you sure?</h3>
				<p className="py-4">
					Do you really want to delete these records? This process cannot be
					undone.
				</p>
				<div className="modal-action">
					<form method="dialog" className=" flex gap-4">
						{/* if there is a button in form, it will close the modal */}
						<button className="btn btn-error text-white">Cancel</button>
						<button
							className="btn btn-warning text-white"
							onClick={() => deleteProduct(productID)}
						>
							Delete
						</button>
					</form>
				</div>
			</div>
		</dialog>
	);
};

export default DeleteProductModal;
