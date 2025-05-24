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

type NoteListItemProps = Note;
const NoteListItem = () => {
	return (
		<Card className="gap-4">
			<CardHeader>
				<CardDescription className="text-xs flex justify-between items-center">
					<Badge variant="secondary">Tag</Badge>
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
							<DropdownMenuItem>
								<Trash />
								Delete
							</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>
				</CardDescription>
				<CardTitle>Note Title</CardTitle>
			</CardHeader>
			<CardContent>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam
				aperiam dicta necessitatibus quaerat tenetur nam, quam, voluptatibus ad
				atque eaque doloribus officiis nobis molestias laudantium dolorum saepe
				perferendis impedit corrupti!
			</CardContent>
			<CardFooter className="flex justify-between">
				<span className="text-xs">10 minutes ago</span>
			</CardFooter>
		</Card>
	);
};
export default NoteListItem;
