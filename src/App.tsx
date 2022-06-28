import Layout from "@/layouts/Layout";
import RegisterContainer from "@/components/register/RegisterContainer";
import UsersContainer from "./components/users/UsersContainer";
import { IUser } from "./types";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";

const mockUsers: IUser[] = [
	{
		id: 1,
		firstname: "อายากะ",
		lastname: "คามิซาโตะ",
		username: "ShirasagiHimegimi",
		email: "example@gmail.com",
	},
	{
		id: 2,
		firstname: "A",
		lastname: "B",
		username: "CantCook",
		email: "example@gmail.com",
	},
	{
		id: 3,
		firstname: "A",
		lastname: "B",
		username: "CuteOni",
		email: "example@gmail.com",
	},
	{
		id: 4,
		firstname: "A",
		lastname: "B",
		username: "SmallBodyBigBrain",
		email: "example@gmail.com",
	},
	{
		id: 5,
		firstname: "A",
		lastname: "B",
		username: "VirtualCat",
		email: "example@gmail.com",
	},
	{
		id: 6,
		firstname: "A",
		lastname: "B",
		username: "username",
		email: "example@gmail.com",
	},
];

function App() {
	const [users, setUsers] = useState<IUser[]>(mockUsers);

	return (
		<Routes>
			<Route element={<Layout />}>
				<Route path="/" element={<UsersContainer users={users} />} />
				<Route path="/register" element={<RegisterContainer />} />
			</Route>
		</Routes>
	);
}

export default App;
