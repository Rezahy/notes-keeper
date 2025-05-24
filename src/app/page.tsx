import NotesSearchForm from "@/components/notes-search-form";

const HomePage = () => {
	return (
		<section>
			<header>
				<h1 className="text-2xl font-semibold py-7 text-center">
					Notes Keeper App
				</h1>
			</header>
			<NotesSearchForm />
		</section>
	);
};
export default HomePage;
