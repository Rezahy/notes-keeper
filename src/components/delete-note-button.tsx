import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import useNotes from "@/stores/notes";
import { Trash } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

type DeleteNoteButtonProps = {
	id: string;
};
const DeleteNoteButton = ({ id }: DeleteNoteButtonProps) => {
	const [open, setOpen] = useState(false);
	const deleteNote = useNotes((state) => state.deleteNote);
	const deleteNoteHandler = () => {
		deleteNote(id);
		setOpen(false);
		toast.success("note deleted successfully");
	};
	return (
		<AlertDialog open={open} onOpenChange={setOpen}>
			<AlertDialogTrigger asChild>
				<DropdownMenuItem onSelect={(e) => e.preventDefault()}>
					<Trash />
					Delete
				</DropdownMenuItem>
			</AlertDialogTrigger>
			<AlertDialogContent>
				<AlertDialogHeader>
					<AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
					<AlertDialogDescription>
						This action cannot be undone. This will permanently remove your note
						from our servers.
					</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter>
					<AlertDialogCancel>Cancel</AlertDialogCancel>
					<AlertDialogAction
						onClick={(e) => {
							e.preventDefault();
							deleteNoteHandler();
						}}
					>
						Continue
					</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	);
};
export default DeleteNoteButton;
