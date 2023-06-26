import memesData from "../memesData";
import React from "react";

export default function Meme() {
	const [meme, setMeme] = React.useState({
		topText: "",
		bottomText: "",
		randomImage: "http://i.imgflip.com/1bij.jpg",
	});
	const [allMemeImages, setAllMemeImages] = React.useState(memesData);

	function getMemeImage() {
		const memesArray = memesData.data.memes;
		const randomNumber = Math.floor(Math.random() * memesArray.length);
		const url = memesArray[randomNumber].url;
		setMeme((prevMeme) => ({
			...prevMeme,
			randomImage: url,
		}));
	}
	return (
		<main>
			<div className="form">
				<input className="form--input" placeholder="Top Text" type="text" />
				<input className="form--input" placeholder="Bottom Text" type="text" />
				<button className="form--button" onClick={getMemeImage}>
					Get a new meme image 🖼
				</button>
			</div>
			<img src={meme.randomImage} className="meme--image" />
		</main>
	);
}
