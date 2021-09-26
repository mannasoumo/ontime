import { Layout, } from "antd";
import { useLocation, Switch, Route } from "react-router-dom"

import Navbar from "../components/navbar";
import HomePage from "../pages/home";
import ContactUsPage from "../pages/contact-us";
import AboutUsPage from "../pages/about-us";

const { Header, Content } = Layout;

const DefaultLayout = (props) => {
	const location = useLocation();
	console.log(location);
	return (
		<Layout style={{ padding: "0" }}>
			<Header style={{ width: "100%", padding: "0" }}>
				<Navbar />
			</Header>
			<Content>
				<Switch>
					<Route exact path="/">
						<HomePage />
					</Route>
					<Route exact path="/about">
						<AboutUsPage />
					</Route>
					<Route exact path="/contact">
						<ContactUsPage />
					</Route>
					<Route path="*">
						404
					</Route>
				</Switch>
			</Content>
		</Layout >
	);
}

export default DefaultLayout;