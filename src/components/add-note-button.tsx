import { Plus } from "lucide-react";
import { Button } from "./ui/button";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "./ui/tooltip";
import ResponsiveAddNoteDialog from "./responsive-add-note-dialog";

const AddNoteButton = () => {
	return (
		<ResponsiveAddNoteDialog>
			<TooltipProvider>
				<Tooltip>
					<TooltipTrigger>
						<Button
							className="rounded-full p-5 sm:p-6 cursor-pointer"
							size="icon"
						>
							<Plus />
						</Button>
					</TooltipTrigger>
					<TooltipContent>
						<p>Add Note</p>
					</TooltipContent>
				</Tooltip>
			</TooltipProvider>
		</ResponsiveAddNoteDialog>
	);
};
export default AddNoteButton;
