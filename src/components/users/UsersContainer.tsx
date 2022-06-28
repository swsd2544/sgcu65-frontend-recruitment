import { IUser } from "@/types";
import UsersHeader from "./UsersHeader";
import UsersList from "./UsersList";

interface IProp {
	users: IUser[];
}

function UsersContainer({ users }: IProp) {
	return (
		<div className="mx-auto mt-[3%] flex w-[90%] max-w-6xl flex-col gap-5 lg:gap-12">
			<UsersHeader />
			<UsersList users={users} />
		</div>
	);
}

export default UsersContainer;
