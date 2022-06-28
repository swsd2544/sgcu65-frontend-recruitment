import { IUser } from "@/types";
import { useState } from "react";
import UsersHeader from "./UsersHeader";
import UsersList from "./UsersList";

interface IProp {
	users: IUser[];
}

function UsersContainer({ users }: IProp) {
	const [searchText, setSearchText] = useState<string>("");

	const filteredUsers = users.filter(
		(user) =>
			user.firstname.includes(searchText) ||
			user.lastname.includes(searchText) ||
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
