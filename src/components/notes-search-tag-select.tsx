import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import useNotes from "@/stores/notes";
import { useEffect, useMemo, type Dispatch } from "react";

type NotesSearchTagSelectProps = {
	value: string;
	setValue: Dispatch<React.SetStateAction<string>>;
};
const NotesSearchTagSelect = ({
	value,
	setValue,
}: NotesSearchTagSelectProps) => {
	const notes = useNotes((state) => state.notes);
	const allTags = useMemo(() => {
		const notesTags = notes.map((note) => note.tag);
		return [...new Set(notesTags)];
	}, [notes]);
	const tagOnChangeHandler = (newTag: string) => {
		setValue(newTag);
	};
	useEffect(() => {
		if (value !== "all") {
			const isIncludeAnyTag = allTags.includes(value);
			if (!isIncludeAnyTag) {
				setValue("all");
			}
		}
	}, [allTags, setValue, value]);
	return (
		<Select onValueChange={tagOnChangeHandler} value={value}>
			<SelectTrigger className="sm:min-w-[100px]">
				<SelectValue placeholder="Select a tag" />
			</SelectTrigger>
			<SelectContent>
				<SelectGroup>
					<SelectLabel>Tags</SelectLabel>
					<SelectItem value="all">All</SelectItem>
					{allTags.map((tag, index) => (
						<SelectItem value={tag} key={index}>
							{tag}
						</SelectItem>
					))}
				</SelectGroup>
			</SelectContent>
		</Select>
	);
};
export default NotesSearchTagSelect;
