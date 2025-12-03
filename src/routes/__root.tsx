import * as React from "react";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import Navbar from "../shared/navbar";
import Footer from "../shared/footer";

export const Route = createRootRoute({
	component: RootComponent,
});

function RootComponent() {
	return (
		<React.Fragment>
			<Navbar />
			<div className="outlet__container">
				<Outlet />
			</div>

			<Footer />
		</React.Fragment>
	);
}
