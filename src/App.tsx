import Layout from "@/layouts/Layout";
import RegisterContainer from "@/components/register/RegisterContainer";
import UsersContainer from "./components/users/UsersContainer";
import { Route, Routes } from "react-router-dom";

function App() {
	return (
		<Routes>
			<Route element={<Layout />}>
				<Route path="/" element={<UsersContainer />} />
				<Route path="/register" element={<RegisterContainer />} />
			</Route>
		</Routes>
	);
}

export default App;
