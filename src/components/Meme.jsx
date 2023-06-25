export default function Meme() {
	return (
		<main>
			<form className="form">
				<input className="form--input" placeholder="Top Text" type="text" />
				<input className="form--input" placeholder="Bottom Text" type="text" />
				<button className="form--button">Get a new meme image 🖼</button>
			</form>
		</main>
	);
}
