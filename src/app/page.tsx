import NoteList from "@/components/note-list";
import NotesSearchForm from "@/components/notes-search-form";
import NotesSearchTagSelect from "@/components/notes-search-tag-select";
import useNotes from "@/stores/notes";
import { useMemo, useState } from "react";
import { motion } from "motion/react";
import EmptyView from "@/components/empty-view";

const HomePage = () => {
	const notes = useNotes((state) => state.notes);
	const [tag, setTag] = useState("all");
	const [search, setSearch] = useState("");
	const filteredNotes = useMemo(() => {
		return notes
			.filter(
				(note) => note.text.includes(search) || note.title.includes(search)
			)
			.filter((note) => {
				if (tag === "all") {
					return true;
				} else {
					return note.tag === tag;
				}
			});
	}, [notes, tag, search]);
	return (
		<section>
			<header>
				<h1 className="text-2xl font-semibold py-7 text-center">
					Notes Keeper App
				</h1>
			</header>
			<div className="max-w-md mx-auto">
				<div className="flex gap-2">
					<NotesSearchForm setSearch={setSearch} />
					<NotesSearchTagSelect value={tag} setValue={setTag} />
				</div>
			</div>
			{notes.length > 0 ? (
				<NoteList notes={filteredNotes} />
			) : (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.5 }}
				>
					<EmptyView>There isn't any note!</EmptyView>
				</motion.div>
			)}
		</section>
	);
};
export default HomePage;
