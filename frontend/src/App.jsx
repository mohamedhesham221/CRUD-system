import { useState } from "react";
import Modal from "./utils/Modal";
import Input from "./utils/Input";
import { Link, Routes, Route, } from "react-router-dom";
import ProductForm from "./Components/ProductForm";
import AddProductModal from "./Components/AddProductModal";
import EditProductModal from "./Components/EditProductModal";
import Products from "./Pages/Products";
import ProductInfo from "./Pages/ProductInfo";

function App() {
	const [showAddModal, setShowAddModal] = useState(false);

	function handleCloseAdd() {
		setShowAddModal(false);
	}

	return (
		<>
			<header className="flex justify-between items-center px-5 lg:px-44 pt-4">
				<h1 className="text-[#183B4E] text-2xl font-bold ">
					<Link to="/" className="flex flex-col">
						<span>CRUD APP</span>
						<span className="italic text-xs">Products managment</span>
					</Link>
				</h1>
				<div className="flex flex-col md:flex-row items-center gap-2">
					<button
						className="btn text-[#183B4E] bg-white"
						onClick={() => setShowAddModal(true)}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
						>
							<line x1="12" y1="5" x2="12" y2="19"></line>
							<line x1="5" y1="12" x2="19" y2="12"></line>
						</svg>
						Add Product
					</button>
				</div>
			</header>
			<div className="divider mt-2"></div>
			<main className="px-6 py-4 lg:px-44">
				<AddProductModal show={showAddModal} onClose={handleCloseAdd} />

				<Routes>
					<Route path="/" element={<Products />} />
					<Route path="/product/:id" element={<ProductInfo />} />
				</Routes>
			</main>
		</>
	);
}

export default App;
