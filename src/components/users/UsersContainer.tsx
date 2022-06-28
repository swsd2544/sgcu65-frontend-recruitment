import { fetchUsers } from "@/axios";
import { IUser } from "@/types";
import { useState } from "react";
import { useQuery } from "react-query";
import LoadingSpinner from "../ui/LoadingSpinner";
import UsersHeader from "./UsersHeader";
import UsersList from "./UsersList";

function UsersContainer() {
	const {
		isLoading,
		isError,
		data: users = [],
		error,
	} = useQuery<IUser[], Error>("users", fetchUsers);
	const [searchText, setSearchText] = useState<string>("");

	if (isLoading) {
		return <LoadingSpinner />;
	}

	if (isError) {
		console.log(error);
		return (
			<div className="mt-10 flex w-full justify-center">
				<h1>Failed to fetch users...</h1>
			</div>
		);
	}

	const filteredUsers = users.filter(
		(user) =>
			user.name.includes(searchText) ||
			user.surname.includes(searchText) ||
			user.username.includes(searchText)
	);

	return (
		<div className="mx-auto mt-[3%] flex w-[90%] max-w-6xl flex-col gap-5 lg:gap-12">
			<UsersHeader searchText={searchText} setSearchText={setSearchText} />
			<UsersList users={filteredUsers} />
		</div>
	);
}

export default UsersContainer;
