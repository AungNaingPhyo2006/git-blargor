import Image from "next/image";
import Link from "next/link";
import React from "react";
import Author from "./_child/author";
export default function section1() {
	const bgImage = {
		background: "url('/images/img.png') no-repeat",
		backgroundPosition: "right",
	};
	return (
		<section className="py-16" style={bgImage}>
			<div className="container mx-auto md:px-20">
				<h1 className="font-bold text-4xl pb-12 text-center ">
					Trending
				</h1>
				{Slide()}
			</div>
		</section>
	);
}

function Slide() {
	return (
		<div className="grid md:grid-cols-2 px-9">
			<div className="image">
				<Link href={"#"}>
					<Image
						src={"/images/wall1.jpg"}
						width={450}
						height={450}
						style={{
							borderRadius: 20,
							border: "1px solid #fff",
						}}
					/>
				</Link>
			</div>
			<div className="info flex justify-center flex-col">
				<div className="cat flex flex-row">
					<Link href={"#"}>
						<h3 className="text-orange-500 hover:text-slate-100">
							Business, Travel
						</h3>
					</Link>
					<Link href={"#"}>
						<h3 className="text-orange-400 hover:text-slate-100">
							- July 12, 2023
						</h3>
					</Link>
				</div>
				{/* <=========> */}
				<div className="title">
					<Link
						href={"#"}
						className="text-1xl md:text-3xl font-bold text-orange-400 hover:text-slate-100">
						Lorem ipsum, dolor sit amet consectetur adipisicing
						elit.
					</Link>
				</div>
				<p className="py-3">
					Lorem ipsum dolor, sit amet consectetur adipisicing elit.
					Earum sequi aliquam quisquam accusamus nisi molestiae quia
					inventore doloremque, aliquid doloribus distinctio
					accusantium ullam quis perspiciatis fugiat itaque voluptates
					reprehenderit cupiditate!
				</p>
				<Author></Author>
			</div>
		</div>
	);
}

//43:48
