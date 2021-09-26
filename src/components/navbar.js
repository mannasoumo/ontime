import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import { Menu, Button, Drawer, Row, Col } from "antd";
import {
	FieldTimeOutlined,
	HomeOutlined,
	InfoCircleOutlined,
	ContactsOutlined,
	MenuOutlined,
} from "@ant-design/icons";
import { BrowserView, MobileView } from "react-device-detect";

const menuStyle = {
	boxShadow: "5px 8px 24px 5px rgba(208, 216, 243, 0.6)",
	fontSize: "1rem",
};

const menuItemStyle = {
	fontWeight: "500",
};

const signInButtonStyle = {
	backgroundColor: "#F15F53",
	border: "none",
};

const brandStyle = {
	fontSize: "2rem",
	color: "#1890FF",
};

const rowHeaderStyle = {
	margin: "0",
	backgroundColor: "#FFF",
	boxShadow: "5px 8px 24px 5px rgba(208, 216, 243, 0.6)",
}

const phoneMenuBtn = {
	marginRight: "0.5rem",
	borderRadius: "5px",
	backgroundColor: "#F15F53",
	border: "none"
}

const drawerStyle = { padding: "0", border: "2 px solid green", margin: "0", width: "100%" }

const Navbar = () => {
	const [state, setState] = useState({
		current: "home",
		collapsed: false,
		visible: false,
	});

	const showDrawer = () => {
		setState({
			...state,
			visible: true,
		});
	};

	const onClose = () => {
		setState({
			...state,
			visible: false,
		});
	};

	const handleCick = (event) => {
		let clicked = event.key;
		clicked = clicked === "brand" ? "home" : clicked;
		clicked = clicked === "btn" ? state.current : clicked;
		setState({
			...state,
			current: clicked,
			visible: false,
		});
	};

	return (
		<div>
			<BrowserView>
				<Menu
					defaultSelectedKeys={[state.current]}
					style={menuStyle}
					mode="horizontal"
					theme="light"
					selectedKeys={state.current}
					onClick={handleCick}
				>
					<Menu.Item key="brand">
						<Link to="/">
							<FieldTimeOutlined style={brandStyle} />
						</Link>
					</Menu.Item>
					<Menu.Item
						key="home"
						icon={<HomeOutlined />}
						style={{ ...menuItemStyle, marginLeft: "auto" }}
					>
						<Link to="/">Home</Link>
					</Menu.Item>
					<Menu.Item
						key="about"
						icon={<InfoCircleOutlined />}
						style={menuItemStyle}
					>
						<Link to="/about">About Us</Link>
					</Menu.Item>
					<Menu.Item
						key="contact"
						icon={<ContactsOutlined />}
						style={menuItemStyle}
					>
						<Link to="/contact">Conatct Us</Link>
					</Menu.Item>
					<Menu.Item key="btn" style={menuItemStyle}>
						<Button type="primary" shape="round" style={signInButtonStyle}>
							Sign in
						</Button>
					</Menu.Item>
				</Menu>
			</BrowserView>
			<MobileView>
				{!state.visible && (
					<Row
						style={rowHeaderStyle}
					>
						<Col
							span={12}
							style={{ textAlign: "left" }}
						>
							<Link to="/"></Link>
							<FieldTimeOutlined
								style={{ ...brandStyle, marginLeft: "1rem" }}
							/>
						</Col>
						<Col
							span={12}
							style={{
								textAlign: "right",
								padding: "0"
							}}
						>
							<Button
								type="primary"
								style={phoneMenuBtn}
								onClick={showDrawer}
							>
								<MenuOutlined style={{ fontSize: "1.4rem" }} />
							</Button>
						</Col>
					</Row>
				)}
				{state.visible && (
					<Drawer
						style={drawerStyle}
						title="Onteime"
						width="90%"
						height="100%"
						placement="right"
						onClose={onClose}
						visible={state.visible}
					>
						<Menu
							defaultSelectedKeys={[state.current]}
							style={{
								...menuStyle,
								margin: "-24px",
								padding: "0",
								boxShadow: "none"
							}}
							mode="vertical"
							theme="light"
							selectedKeys={state.current}
							onClick={handleCick}
						>
							<Menu.Item
								key="home"
								icon={<HomeOutlined />}
								style={{ ...menuItemStyle, marginLeft: "auto" }}
							>
								<Link to="/">Home</Link>
							</Menu.Item>
							<Menu.Item
								key="about"
								icon={<InfoCircleOutlined />}
								style={menuItemStyle}
							>
								<Link to="/about">About Us</Link>
							</Menu.Item>
							<Menu.Item
								key="contact"
								icon={<ContactsOutlined />}
								style={menuItemStyle}
							>
								<Link to="/contact">Conatct Us</Link>
							</Menu.Item>
							<Menu.Item key="btn" style={menuItemStyle}>
								<Button type="primary" shape="round" style={signInButtonStyle}>
									Sign in
								</Button>
							</Menu.Item>
						</Menu>
					</Drawer>
				)}
			</MobileView>
		</div>
	);
};

export default Navbar;
