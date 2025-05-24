import { type FormEvent, useRef } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Search } from "lucide-react";

const NotesSearchForm = () => {
	const searchRef = useRef<HTMLInputElement | null>(null);
	const onSubmitHandler = (e: FormEvent) => {
		e.preventDefault();
		if (searchRef.current && searchRef.current.value.trim().length > 0) {
			console.log("called");
		}
	};
	return (
		<div className="max-w-md mx-auto relative">
			<form onSubmit={onSubmitHandler}>
				<Input
					placeholder="Search notes ..."
					className="pr-9"
					name="search"
					ref={searchRef}
				/>
				<Button
					variant="ghost"
					size="sm"
					className="absolute right-0.5 text-gray-500 top-[50%] -translate-y-[50%]"
				>
					<Search absoluteStrokeWidth size={16} />
				</Button>
			</form>
		</div>
	);
};
export default NotesSearchForm;
