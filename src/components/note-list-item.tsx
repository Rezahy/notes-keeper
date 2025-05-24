import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Badge } from "./ui/badge";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { EllipsisVertical, LucideEdit, Trash } from "lucide-react";
import type { Note } from "@/@types/note";
import DeleteNoteButton from "./delete-note-button";

type NoteListItemProps = Note;
const NoteListItem = ({
	id,
	tag,
	text,
	title,
	createAt,
	updatedAt,
}: NoteListItemProps) => {
	return (
		<Card className="gap-4">
			<CardHeader>
				<CardDescription className="text-xs flex justify-between items-center">
					<Badge variant="secondary">{tag}</Badge>
					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<Button variant="ghost" className="relative left-4">
								<EllipsisVertical />
							</Button>
						</DropdownMenuTrigger>
						<DropdownMenuContent>
							<DropdownMenuItem>
								<LucideEdit />
								Edit
							</DropdownMenuItem>
							<DeleteNoteButton id={id} />
						</DropdownMenuContent>
					</DropdownMenu>
				</CardDescription>
				<CardTitle>{title}</CardTitle>
			</CardHeader>
			<CardContent>{text}</CardContent>
			<CardFooter className="flex justify-between">
				<span className="text-xs">10 minutes ago</span>
			</CardFooter>
		</Card>
	);
};
export default NoteListItem;
