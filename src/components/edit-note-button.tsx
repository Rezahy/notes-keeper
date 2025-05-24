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
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import useNotes from "@/stores/notes";
import type { Note } from "@/@types/note";
import { toast } from "sonner";

const formSchema = z.object({
	title: z.string().nonempty("The Title field is required"),
	tag: z.string().nonempty("The Tag field is required"),
	text: z.string().nonempty("The Text field is required"),
});

type EditNoteButtonDialogProps = Note;
const EditNoteButtonDialog = ({
	children,
	id,
	tag,
	text,
	title,
	createAt,
}: PropsWithChildren<Omit<EditNoteButtonDialogProps, "updatedAt">>) => {
	const [open, setOpen] = useState(false);
	const isDesktop = useMediaQuery("(min-width: 768px)");
	const editNote = useNotes((state) => state.editNote);
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			title,
			tag,
			text,
		},
	});
	const onSubmit = (values: z.infer<typeof formSchema>) => {
		const { title, tag, text } = values;
		editNote(id, title, tag, text, createAt);
		form.reset();
		setOpen(false);
		toast.success("note edited successfully");
	};

	if (isDesktop) {
		return (
			<Dialog open={open} onOpenChange={setOpen}>
				<DialogTrigger asChild>{children}</DialogTrigger>
				<DialogContent className="sm:max-w-[425px]">
					<DialogHeader>
						<DialogTitle>Edit Note</DialogTitle>
						<DialogDescription>
							Edit title, tag and text for your note. Click edit when you're
							done.
						</DialogDescription>
					</DialogHeader>
					<Form {...form}>
						<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
							<div className="grid grid-cols-2 gap-4">
								<FormField
									control={form.control}
									name="title"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Title</FormLabel>
											<FormControl>
												<Input {...field} />
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name="tag"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Tag</FormLabel>
											<FormControl>
												<Input {...field} />
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
							</div>
							<FormField
								control={form.control}
								name="text"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Title</FormLabel>
										<FormControl>
											<Textarea {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<DialogFooter className="flex justify-between w-full">
								<DialogClose asChild>
									<Button variant="outline">Cancel</Button>
								</DialogClose>
								<Button>Edit</Button>
							</DialogFooter>
						</form>
					</Form>
				</DialogContent>
			</Dialog>
		);
	}
	return (
		<Drawer open={open} onOpenChange={setOpen}>
			<DrawerTrigger asChild>{children}</DrawerTrigger>
			<DrawerContent className="max-h-[80vh]">
				<DrawerHeader className="text-left">
					<DrawerTitle>Edit Note</DrawerTitle>
					<DrawerDescription>
						Edit title, tag and text for your note. Click edit when you're done.
					</DrawerDescription>
				</DrawerHeader>
				<ScrollArea className="max-h-[60vh] overflow-auto">
					<Form {...form}>
						<form
							onSubmit={form.handleSubmit(onSubmit)}
							className="px-4 space-y-3"
						>
							<FormField
								control={form.control}
								name="title"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Title</FormLabel>
										<FormControl>
											<Input {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="tag"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Tag</FormLabel>
										<FormControl>
											<Input {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="text"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Title</FormLabel>
										<FormControl>
											<Textarea {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<DrawerFooter className="pt-2">
								<Button>Edit</Button>
								<DrawerClose asChild>
									<Button variant="outline">Cancel</Button>
								</DrawerClose>
							</DrawerFooter>
						</form>
					</Form>
				</ScrollArea>
			</DrawerContent>
		</Drawer>
	);
};
export default EditNoteButtonDialog;
