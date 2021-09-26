import {
	BrowserRouter as Router,
	Switch,
	Route
} from "react-router-dom";

import DashboardPage from "./dashboard";
import DefaultLayout from "../layout/default-layout";

const Pages = (props) => {
	return <Router>
		<Switch>
			<Route path="/">
				<DefaultLayout />
			</Route>
			<Route path="/app/dashboard" exact>
				<DashboardPage />
			</Route>
		</Switch>
	</Router>
}

export default Pages;