import Layout from "@/layouts/Layout";
import { Route, Routes, useMatch, useResolvedPath } from "react-router-dom";
import HomePage from "@/pages/HomePage";
import RegisterPage from "@/pages/RegisterPage";

function App() {
	const showPhoto = useMatch({ path: "/register", end: true });

	return (
		<Routes>
			<Route element={<Layout showPhoto={!!showPhoto} />}>
				<Route path="/" element={<HomePage />} />
				<Route path="/register" element={<RegisterPage />} />
			</Route>
		</Routes>
	);
}

export default App;
