import type { Note } from "@/@types/note";
import NoteListItem from "./note-list-item";
import { AnimatePresence, motion } from "motion/react";
import EmptyView from "./empty-view";
type NoteListProps = {
	notes: Note[];
};
const NoteList = ({ notes }: NoteListProps) => {
	if (notes.length > 0) {
		return (
			<section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 py-7">
				<AnimatePresence>
					{notes.map((note, index) => (
						<motion.div
							layout
							key={note.id}
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{
								duration: 0.25,
								delay: index / 10,
							}}
							exit={{ opacity: 0 }}
						>
							<NoteListItem key={note.id} {...note} />
						</motion.div>
					))}
				</AnimatePresence>
			</section>
		);
	}
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.5 }}
		>
			<EmptyView>We can't find any notes!</EmptyView>
		</motion.div>
	);
};
export default NoteList;
