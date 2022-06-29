import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import TextField from "@/components/ui/TextField";
import { createUser } from "@/axios";
import { useMutation } from "react-query";
import { CreateUserDto } from "@/types";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "../ui/LoadingSpinner";
import FailedRegisterDialog from "./FailedRegisterDialog";
import { useState } from "react";

interface FormData {
	name: string;
	surname: string;
	username: string;
	email: string;
	password: string;
	confirmPassword: string;
}

const schema = yup
	.object({
		name: yup.string().required("Name is required"),
		surname: yup.string().required("Surname is required"),
		username: yup.string().required("Username is required"),
		email: yup
			.string()
			.email("Please enter correct email format")
			.required("Email is required"),
		password: yup
			.string()
			.min(8, "Password must longer than 8 characters")
			.required("Password is required"),
		confirmPassword: yup
			.string()
			.oneOf([yup.ref("password"), null], "Passwords must match")
			.required("Confirm password is required"),
	})
	.required();

function RegisterForm() {
	const navigate = useNavigate();
	const [isOpen, setIsOpen] = useState(false);
	const createUserMutation = useMutation<void, Error, CreateUserDto>(
		"users",
		createUser,
		{
			onSuccess: () => navigate(".."),
			onError: () => {
				setIsOpen(true);
			},
		}
	);
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>({
		resolver: yupResolver(schema),
	});
	const onSubmit = handleSubmit((data) =>
		createUserMutation.mutate({
			name: data.name,
			surname: data.surname,
			username: data.username,
			email: data.email,
			password: data.password,
		})
	);

	return (
		<>
			<FailedRegisterDialog
				isOpen={isOpen}
				closeModal={() => setIsOpen(false)}
			/>
			<form className="flex flex-col space-y-7" onSubmit={onSubmit}>
				<TextField
					{...register("name")}
					placeholder="ชื่อ"
					error={errors.name?.message}
				/>
				<TextField
					{...register("surname")}
					placeholder="นามสกุล"
					error={errors.surname?.message}
				/>
				<TextField
					{...register("username")}
					placeholder="ชื่อผู้ใช้"
					error={errors.username?.message}
				/>
				<TextField
					{...register("email")}
					placeholder="อีเมล์"
					error={errors.email?.message}
				/>
				<TextField
					{...register("password")}
					placeholder="รหัสผ่าน"
					error={errors.password?.message}
					type="password"
				/>
				<TextField
					{...register("confirmPassword")}
					placeholder="ยืนยันรหัสผ่าน"
					error={errors.confirmPassword?.message}
					type="password"
				/>
				<button
					className="rounded bg-primary py-1 text-center text-white"
					type="submit"
					disabled={createUserMutation.isLoading}
				>
					{createUserMutation.isLoading && (
						<div className="flex h-4 items-center justify-center">
							<LoadingSpinner />
						</div>
					)}
					{!createUserMutation.isLoading && "Submit"}
				</button>
			</form>
		</>
	);
}

export default RegisterForm;
