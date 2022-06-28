import React from "react";
import Navbar from "@/components/Navbar";
import kite from "@/assets/kite.png";
import { Outlet, useLocation } from "react-router-dom";

function Layout() {
	const location = useLocation();
	const showPhoto = location.pathname === "/register";

	return (
		<div className="flex min-h-screen flex-col">
			<Navbar />
			<div className="relative flex grow bg-mobile bg-cover bg-center lg:bg-desktop">
				{showPhoto && (
					<img
						src={kite}
						alt="pink kite"
						className="absolute top-[7.5%] left-[10%] hidden aspect-square max-h-[92.5%] max-w-[35%] lg:block"
					/>
				)}
				<Outlet />
			</div>
		</div>
	);
}

export default Layout;
