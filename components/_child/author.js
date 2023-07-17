import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function author() {
	return (
		<div className="author flex py-5">
			<Image
				src={"/images/anp.png"}
				width={50}
				height={50}
				className="rounded-full border-white-600 border-x-2 border-y-2"></Image>
			<div className="flex flex-col justify-center px-4">
				<Link
					href={"/"}
					className="text-md font-bold text-green-600 hover:text-green-50">
					Aung Naing Phyo
				</Link>
				<span className="text-sm  bg-slate-600 px-3 rounded-sm">
					Software Developer and Author
				</span>
			</div>
		</div>
	);
}
