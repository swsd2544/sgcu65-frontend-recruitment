import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import TextField from "@/components/ui/TextField";

interface FormData {
	firstname: string;
	lastname: string;
	username: string;
	email: string;
	password: string;
	confirmPassword: string;
}

const schema = yup
	.object({
		firstname: yup.string().required("Firstname is required"),
		lastname: yup.string().required("Lastname is required"),
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
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>({
		resolver: yupResolver(schema),
	});
	const onSubmit = handleSubmit((data) => console.dir(data));

	return (
		<form className="flex flex-col space-y-7" onSubmit={onSubmit}>
			<TextField
				{...register("firstname")}
				placeholder="ชื่อ"
				error={errors.firstname?.message}
			/>
			<TextField
				{...register("lastname")}
				placeholder="นามสกุล"
				error={errors.lastname?.message}
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
			>
				Submit
			</button>
		</form>
	);
}

export default RegisterForm;
