import Layout from "@/layouts/Layout";
import RegisterContainer from "@/components/register/RegisterContainer";
import UsersContainer from "./components/users/UsersContainer";
import { IUser } from "./types";
import { useState } from "react";

const mockUsers: IUser[] = [
	{
		id: 1,
		firstname: "A",
		lastname: "B",
		username: "username",
		email: "example@gmail.com",
	},
	{
		id: 2,
		firstname: "A",
		lastname: "B",
		username: "username",
		email: "example@gmail.com",
	},
	{
		id: 3,
		firstname: "A",
		lastname: "B",
		username: "username",
		email: "example@gmail.com",
	},
	{
		id: 4,
		firstname: "A",
		lastname: "B",
		username: "username",
		email: "example@gmail.com",
	},
	{
		id: 5,
		firstname: "A",
		lastname: "B",
		username: "username",
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
	const [register, setRegister] = useState<boolean>(false);
	const [users, setUsers] = useState<IUser[]>(mockUsers);

	return (
		<Layout showPhoto={!register}>
			{register && <UsersContainer users={users} />}
			{!register && <RegisterContainer />}
		</Layout>
	);
}

export default App;
