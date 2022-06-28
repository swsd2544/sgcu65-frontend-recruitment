import { IUser } from "@/types";
import Card from "@/components/ui/Card";

interface IProp {
	users: IUser[];
}

function UsersList({ users }: IProp) {
	return (
		<div className="grid auto-rows-auto grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:justify-items-center lg:grid-cols-4 lg:gap-6 lg:gap-y-8">
			{users.map((user) => (
				<Card key={user.id} className="w-full max-w-full p-4">
					<h4 className="text-2xl font-medium text-primary">{user.username}</h4>
					<p className="font-medium">{`${user.firstname} ${user.lastname}`}</p>
				</Card>
			))}
		</div>
	);
}

export default UsersList;
