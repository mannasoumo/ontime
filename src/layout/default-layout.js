import { Layout, } from "antd";
import { useLocation } from "react-router-dom"
import Navbar from "../components/navbar";
const { Header, Content } = Layout;

const DefaultLayout = (props) => {
	const location = useLocation();
	console.log(location);
	return (
		<Layout>
			<Header style={{ width: "100%", padding: "0" }}>
				<Navbar />
			</Header>
			<Content>
			</Content>
		</Layout>
	);
}

export default DefaultLayout;