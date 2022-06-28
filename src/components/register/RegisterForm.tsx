import TextField from "@/components/ui/TextField";

function RegisterForm() {
	return (
		<form className="flex flex-col space-y-7">
			<TextField placeholder="ชื่อ" />
			<TextField placeholder="นามสกุล" />
			<TextField placeholder="ชื่อผู้ใช้" />
			<TextField placeholder="อีเมล์" />
			<TextField placeholder="รหัสผ่าน" />
			<TextField placeholder="ยืนยันรหัสผ่าน" />
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
