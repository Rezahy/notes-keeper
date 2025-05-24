import { useMediaQuery } from "@/hooks/use-media-query";
import { Button } from "./ui/button";
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerDescription,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from "@/components/ui/drawer";
import { useState, type PropsWithChildren } from "react";
import { ScrollArea } from "./ui/scroll-area";

const ResponsiveAddNoteDialog = ({ children }: PropsWithChildren) => {
	const [open, setOpen] = useState(false);
	const isDesktop = useMediaQuery("(min-width: 768px)");
	if (isDesktop) {
		return (
			<Dialog open={open} onOpenChange={setOpen}>
				<DialogTrigger>{children}</DialogTrigger>
				<DialogContent className="sm:max-w-[425px]">
					<DialogHeader>
						<DialogTitle>Add Note</DialogTitle>
						<DialogDescription>
							Fill title, tag and text for your note. Click add when you're
							done.
						</DialogDescription>
					</DialogHeader>
					<div className="grid grid-cols-2 gap-4">
						<div className="space-y-2">
							<Label htmlFor="title" className="text-right">
								Title
							</Label>
							<Input id="title" />
						</div>
						<div className="space-y-2">
							<Label htmlFor="tag" className="text-right">
								Tag
							</Label>
							<Input id="tag" />
						</div>
					</div>
					<div className="space-y-2">
						<Label htmlFor="text" className="text-right">
							Text
						</Label>
						<Textarea id="text" />
					</div>
					<DialogFooter className="flex justify-between w-full">
						<DialogClose asChild>
							<Button variant="outline">Cancel</Button>
						</DialogClose>
						<Button>Add</Button>
					</DialogFooter>
				</DialogContent>
			</Dialog>
		);
	}
	return (
		<Drawer open={open} onOpenChange={setOpen}>
			<DrawerTrigger>{children}</DrawerTrigger>
			<DrawerContent className="max-h-[80vh]">
				<DrawerHeader className="text-left">
					<DrawerTitle>Add Note</DrawerTitle>
					<DrawerDescription>
						Fill title, tag and text for your note. Click add when you're done.
					</DrawerDescription>
				</DrawerHeader>
				<ScrollArea className="max-h-[60vh] overflow-auto">
					<div className="px-4 space-y-3">
						<div className="space-y-2">
							<Label htmlFor="title" className="text-right">
								Title
							</Label>
							<Input id="title" />
						</div>
						<div className="space-y-2">
							<Label htmlFor="tag" className="text-right">
								Tag
							</Label>
							<Input id="tag" />
						</div>
						<div className="space-y-2">
							<Label htmlFor="text" className="text-right">
								Text
							</Label>
							<Textarea id="text" />
						</div>
					</div>
					<DrawerFooter className="pt-2">
						<Button>Add</Button>
						<DrawerClose asChild>
							<Button variant="outline">Cancel</Button>
						</DrawerClose>
					</DrawerFooter>
				</ScrollArea>
			</DrawerContent>
		</Drawer>
	);
};
export default ResponsiveAddNoteDialog;
