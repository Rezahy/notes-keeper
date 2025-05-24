import NoteList from "@/components/note-list";
import NotesSearchForm from "@/components/notes-search-form";
import useNotes from "@/stores/notes";

const HomePage = () => {
	const notes = useNotes((state) => state.notes);
	return (
		<section>
			<header>
				<h1 className="text-2xl font-semibold py-7 text-center">
					Notes Keeper App
				</h1>
			</header>
			<NotesSearchForm />
			<NoteList notes={notes} />
		</section>
	);
};
export default HomePage;
