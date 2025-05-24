import { type Dispatch, type FormEvent, useRef } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Search } from "lucide-react";

type NotesSearchFormProps = {
	setSearch: Dispatch<React.SetStateAction<string>>;
};
const NotesSearchForm = ({ setSearch }: NotesSearchFormProps) => {
	const searchRef = useRef<HTMLInputElement | null>(null);
	const onSubmitHandler = (e: FormEvent) => {
		e.preventDefault();
		if (searchRef.current) {
			setSearch(searchRef.current.value.trim());
		}
	};
	return (
		<div className="max-w-md relative flex-1">
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
