import type { Note } from "@/@types/note";
import NoteListItem from "./note-list-item";
type NoteListProps = {
	notes: Note[];
};
const NoteList = ({ notes }: NoteListProps) => {
	return (
		<section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 py-7">
			{notes.map((note) => (
				<NoteListItem key={note.id} {...note} />
			))}
		</section>
	);
};
export default NoteList;
