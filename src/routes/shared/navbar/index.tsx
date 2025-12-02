import { Link } from "@tanstack/react-router";
import "./index.styl";

const Navbar = () => {
	return (
		<nav className="navbar">
			<header className="navbar__header">Fluid Library</header>
			<ul className="navbar__list">
				<li className="navbar__list--item">
					<Link className="navbar__list--item--link" to="/">
						Home
					</Link>
				</li>
				<li className="navbar__list--item">
					<Link
						className="navbar__list--item--link"
						to="/components/chat-message"
					>
						Chat Message
					</Link>
				</li>
				<li className="navbar__list--item">
					<Link
						className="navbar__list--item--link"
						to="/components/chat-message"
					>
						Chat Message
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
