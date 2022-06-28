export interface User {
	name: string;
	surname: string;
	username: string;
}

export interface IUser extends User {
	id: number;
}
