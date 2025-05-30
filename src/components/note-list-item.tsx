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
import { EllipsisVertical, LucideEdit } from "lucide-react";
import type { Note } from "@/@types/note";
import DeleteNoteButton from "./delete-note-button";
import EditNoteButtonDialog from "./edit-note-button";
import { formatDistanceToNow } from "date-fns";

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
							<EditNoteButtonDialog
								id={id}
								title={title}
								text={text}
								tag={tag}
								createAt={createAt}
							>
								<DropdownMenuItem onSelect={(e) => e.preventDefault()}>
									<LucideEdit />
									Edit
								</DropdownMenuItem>
							</EditNoteButtonDialog>
							<DeleteNoteButton id={id} />
						</DropdownMenuContent>
					</DropdownMenu>
				</CardDescription>
				<CardTitle>
					<h3>{title}</h3>
				</CardTitle>
			</CardHeader>
			<CardContent className="flex-1">
				<p>{text}</p>
			</CardContent>
			<CardFooter className="flex justify-between">
				<span className="text-xs">
					{formatDistanceToNow(updatedAt, {
						addSuffix: true,
					})}
				</span>
			</CardFooter>
		</Card>
	);
};
export default NoteListItem;
