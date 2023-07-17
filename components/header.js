import React from "react";
import { ImFacebook, ImTwitter, ImYoutube } from "react-icons/im";
import Link from "next/link";
export default function header() {
	return (
		<header>
			<div className="xl:container xl:mx-auto flex flex-col items-center sm:flex-row sm:justify-between text-center py-3">
				<div className="md:flex-none w-96 order-2 sm:order-1 flex justify-center py-4 sm:py-0">
					<input
						type="text"
						placeholder="Search ..."
						className="input-text"
					/>
				</div>
				<div className="shrink w-80 sm:order-2  text-red-50">
					<Link href={"/"} className="font-bold uppercase text-3xl">
						Shwe Kabaw
					</Link>
				</div>
				<div className="w-96 order-3 flex justify-center ">
					<div className="flex gap-6">
						<Link href={"https://www.facebook.com/"}>
							<ImFacebook size={24} />
						</Link>
						<Link
							href={
								"https://www.youtube.com/channel/UCiy4n9UAA45Ew8XIfUOBCmg"
							}>
							<ImYoutube size={24} />
						</Link>
						<Link href={"https://github.com/"}>
							<ImTwitter size={24} />
						</Link>
					</div>
				</div>
			</div>
		</header>
	);
}
