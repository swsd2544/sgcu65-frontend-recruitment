import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import TextField from "@/components/ui/TextField";
import { createUser } from "@/axios";
import { useMutation } from "react-query";
import { CreateUserDto } from "@/types";
import { useNavigate } from "react-router-dom";

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
	const createUserMutation = useMutation<void, Error, CreateUserDto>(
		"users",
		createUser,
		{
			onSuccess: () => navigate(".."),
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
				{createUserMutation.isLoading ? (
					<svg
						role="status"
						className="text-gray-200 dark:text-gray-600 mx-auto h-6 w-6 animate-spin fill-primary"
						viewBox="0 0 100 101"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
							fill="currentColor"
						/>
						<path
							d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
							fill="currentFill"
						/>
					</svg>
				) : (
					"Submit"
				)}
			</button>
		</form>
	);
}

export default RegisterForm;
