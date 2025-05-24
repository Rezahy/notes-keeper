import { Plus } from "lucide-react";
import { Button } from "./ui/button";
import ResponsiveAddNoteDialog from "./responsive-add-note-dialog";

const AddNoteButton = () => {
	return (
		<ResponsiveAddNoteDialog>
			<Button className="rounded-full p-5 sm:p-6 cursor-pointer" size="icon">
				<Plus />
			</Button>
		</ResponsiveAddNoteDialog>
	);
};
export default AddNoteButton;
