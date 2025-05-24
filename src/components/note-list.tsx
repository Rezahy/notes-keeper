import NoteListItem from "./note-list-item";

const NoteList = () => {
	return (
		<section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 py-7">
			{Array.from({ length: 10 }).map((_, index) => (
				<NoteListItem key={index} />
			))}
		</section>
	);
};
export default NoteList;
