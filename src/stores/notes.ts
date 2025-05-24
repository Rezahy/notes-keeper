import type { Note } from "@/@types/note";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { v4 as uuidv4 } from "uuid";
type State = {
	notes: Note[];
};

type Actions = {
	addNote: (title: string, tag: string, text: string) => void;
	editNote: (
		id: string,
		title: string,
		tag: string,
		text: string,
		createAt: Date
	) => void;
	deleteNote: (id: string) => void;
};

const useNotes = create<State & Actions>()(
	persist(
		(set) => ({
			notes: [],
			addNote: (title, tag, text) => {
				const newNote: Note = {
					id: uuidv4(),
					title,
					tag,
					text,
					createAt: new Date(),
					updatedAt: new Date(),
				};
				set((state) => ({ notes: [newNote, ...state.notes] }));
			},
			editNote: (id, title, tag, text, createAt) => {
				const editedNote: Note = {
					id,
					title,
					tag,
					text,
					createAt,
					updatedAt: new Date(),
				};
				set((state) => ({
					notes: [editedNote, ...state.notes.filter((note) => note.id !== id)],
				}));
			},
			deleteNote: (id) => {
				set((state) => ({
					notes: state.notes.filter((note) => note.id !== id),
				}));
			},
		}),
		{
			name: "@notes-keeper:notes-state-1.0.0",
			version: 1,
		}
	)
);

export default useNotes;
