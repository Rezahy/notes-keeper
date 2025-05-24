import AddNoteButton from "@/components/add-note-button";
import AppToaster from "@/components/app-toaster";
import { ModeToggle } from "@/components/mode-toggle";

export default function Layout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<main className="w-screen max-w-6xl mx-auto px-7 py-7 sm:px-10 pb-10">
				{children}
			</main>
			<div className="absolute top-5 sm:top-8 right-5 sm:right-8">
				<ModeToggle />
			</div>
			<div className="fixed bottom-5 sm:bottom-8 right-5 sm:right-8">
				<AddNoteButton />
			</div>
			<AppToaster />
		</>
	);
}
