import "./index.styl";

const Footer = () => {
	const date = new Date().getFullYear();
	return (
		<footer className="footer">
			Copyright &copy; {date}, S.S.Chatterjee, All Rights Reserved
		</footer>
	);
};

export default Footer;
