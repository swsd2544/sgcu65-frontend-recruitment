import Card from "@/components/ui/Card";
import RegisterForm from "./RegisterForm";
import RegisterHeader from "./RegisterHeader";

function RegisterContainer() {
	return (
		<div className="flex w-full items-center justify-center sm:justify-end sm:pr-[8%]">
			<Card className="flex flex-col space-y-10 py-12 px-14 md:py-14 md:px-14 ">
				<RegisterHeader />
				<RegisterForm />
			</Card>
		</div>
	);
}

export default RegisterContainer;
