import TextField from "../ui/TextField";

function UsersHeader() {
	return (
		<div className="flex flex-col items-start justify-between space-y-4 md:flex-row md:items-center">
			<h1 className="text-4xl font-medium lg:text-5xl">รายชื่อผู้ลงทะเบียน</h1>
			<div className="w-full md:w-1/4">
				<TextField placeholder="ค้นหา" />
			</div>
		</div>
	);
}

export default UsersHeader;
