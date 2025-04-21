import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getProductById } from "../utils/http";

const ProductInfo = () => {
	const { id } = useParams();

	const { data, isLoading, isError } = useQuery({
		queryKey: ["product", id],
		queryFn: () => getProductById(id),
	});
	console.log(data);

	if (isLoading)
		return (
			<div  className="flex justify-center items-center min-h-[70vh">
      <div className="skeleton h-[200px] w-[200px] md:h-[300px] md:w-[500px]"></div>
			</div>
		);

	if (isError) return <p>Fetching data error</p>;

	return (
		<div className="flex justify-center items-center min-h-[70vh] text-[#183B4E]">
			<div className="card flex-col md:flex-row card-side bg-base-100 shadow-sm  w-[700px]">
				<div className="card-body md:w-1/2 gap-4 lg:gap-8">
					<h1 className="card-title md:text-6xl">{data.name}</h1>
					<p className="flex flex-col md:text-2xl">
						<span className="text-[#9ca3af]">Category</span>
						<span>{data.category}</span>
					</p>
					<div className="flex items center gap-8">
						<p className="flex flex-col md:text-xl">
							<span className="text-[#9ca3af]">Price</span>
							<span>${data.price}</span>
						</p>
						<p className="flex flex-col md:text-xl">
							<span className="text-[#9ca3af]">Stock</span>
							<span>{data.quantity}</span>
						</p>
					</div>
				</div>
				<div className="card-body md:w-1/2">
					<p className="md:text-xl break-words">{data.description}</p>
				</div>
			</div>
		</div>
	);
};

export default ProductInfo;
