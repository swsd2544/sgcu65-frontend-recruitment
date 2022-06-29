import { Transition } from "@headlessui/react";
import { Fragment } from "react";
import LoadingSpinner from "../ui/LoadingSpinner";

interface IProps {
	show: boolean;
}

function LoadingModal({ show }: IProps) {
	return (
		<Transition show={show} as={Fragment}>
			<div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-25">
				<div className="h-12 w-12">
					<LoadingSpinner />
				</div>
			</div>
		</Transition>
	);
}

export default LoadingModal;
