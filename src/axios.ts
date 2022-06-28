import axios from "axios";
import { CreateUserDto, IUser, User } from "./types";

const instance = axios.create({
	baseURL: "http://isd-test.cucheck.in/",
});

export const fetchUsers = async () => {
	const { data } = await instance.get<User[]>("users");
	return data.map(
		(user, index: number) => ({ ...user, id: index + 1 } as IUser)
	);
};

export const createUser = async (user: CreateUserDto) => {
	await instance.post<void>("users", user);
};

export default instance;
