import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import { Menu, Button, Drawer } from 'antd';
import {
	FieldTimeOutlined,
	HomeOutlined,
	InfoCircleOutlined,
	ContactsOutlined,
	MenuOutlined
} from '@ant-design/icons';
import { BrowserView, MobileView } from "react-device-detect"

const menuStyle = {
	boxShadow: "5px 8px 24px 5px rgba(208, 216, 243, 0.6)",
	fontSize: "1rem",
}

const menuItemStyle = {
	fontWeight: "500"
}

const signInButtonStyle = {
	backgroundColor: "#F15F53",
	border: "none",
}

const brandStyle = {
	fontSize: "2rem",
	color: "#1890FF"
}

const Navbar = () => {
	const [state, setState] = useState({ current: "home", collapsed: false, visible: false });

	const showDrawer = () => {
		setState({
			...state,
			visible: true,
		});
	}

	const onClose = () => {
		setState({
			...state,
			visible: false,
		});
	}

	const handleCick = (event) => {
		let clicked = event.key;
		clicked = clicked === "brand" ? "home" : clicked;
		clicked = clicked === "btn" ? state.current : clicked;
		setState({
			...state,
			current: clicked,
		});
	}

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
					<Menu.Item key="home" icon={<HomeOutlined />} style={{ ...menuItemStyle, marginLeft: "auto" }}>
						<Link to="/">
							Home
						</Link>
					</Menu.Item>
					<Menu.Item key="about" icon={<InfoCircleOutlined />} style={menuItemStyle}>
						<Link to="/about">
							About Us
						</Link>
					</Menu.Item>
					<Menu.Item key="contact" icon={<ContactsOutlined />} style={menuItemStyle}>
						<Link to="/contact">
							Conatct Us
						</Link>
					</Menu.Item>
					<Menu.Item key="btn" style={menuItemStyle}>
						<Button type="primary" shape="round" style={signInButtonStyle}>Sign in</Button>
					</Menu.Item>
				</Menu>
			</BrowserView>
			<MobileView>
				{
					!state.visible &&
					<Button type="primary" onClick={showDrawer}>
						<MenuOutlined />
					</Button>
				}
				{
					state.visible &&
					<Drawer style={{ padding: "0", border: "2 px solid green" }} title="Basic Drawer" placement="right" onClose={onClose} visible={state.visible}>
						<Menu
							defaultSelectedKeys={[state.current]}
							style={{ ...menuStyle, margin: "0", padding: "0", border: "2px solid red" }}
							mode="vertical"
							theme="light"
							selectedKeys={state.current}
							onClick={handleCick}
						>
							<Menu.Item key="brand">
								<Link to="/">
									<FieldTimeOutlined style={brandStyle} />
								</Link>
							</Menu.Item>
							<Menu.Item key="home" icon={<HomeOutlined />} style={{ ...menuItemStyle, marginLeft: "auto" }}>
								<Link to="/">
									Home
								</Link>
							</Menu.Item>
							<Menu.Item key="about" icon={<InfoCircleOutlined />} style={menuItemStyle}>
								<Link to="/about">
									About Us
								</Link>
							</Menu.Item>
							<Menu.Item key="contact" icon={<ContactsOutlined />} style={menuItemStyle}>
								<Link to="/contact">
									Conatct Us
								</Link>
							</Menu.Item>
							<Menu.Item key="btn" style={menuItemStyle}>
								<Button type="primary" shape="round" style={signInButtonStyle}>Sign in</Button>
							</Menu.Item>
						</Menu>
					</Drawer>
				}
				Mobile View
			</MobileView>
		</div>
	);
}

export default Navbar;