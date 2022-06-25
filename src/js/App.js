import { elementSelected } from "./utils/elementSelected.js";

const containerTitle = document.querySelector(".container-headers");
const containerSocialMedias = document.querySelector(".social-medias");
const contentMain = document.querySelector(".container-main");
const containerImages = document.querySelector(".container-imgs");
const imgTravel = containerImages.querySelectorAll(".img-travel");

const urlData = "./data/Data.json";
const comments = document.querySelectorAll(".comment");

const getData = async (fn) => {
	try {
		const response = await fetch(urlData);
		const data = await response.json();
		fn(data)
		if(!response.ok){
			throw new Error('Erro encontrado')

		}
	} catch (err) {
		console.log(err);
	}
};

const renderImagesTravel = ({ imagesTravel }) => {
	imgTravel.forEach((img, index) => {
		img.style.backgroundImage = `url(${imagesTravel[index].src})`;
		img.querySelector(".location").textContent = imagesTravel[index].name;
		img.querySelector(".seasons").textContent = imagesTravel[index].seasons;
	});
};

window.addEventListener("load", () => {
	const sliderInitial = 916;
	containerTitle.classList.add("hidden-off");
	containerSocialMedias.classList.add("translateAnimationX");
	containerImages.scrollTo(sliderInitial, 0);
	getData(renderImagesTravel);
});

const handlerComment = (e) => {
	const element = e.currentTarget;
	elementSelected(comments, element, "comment-select");
};

const displayToggle = () => {
	const navigation = document.querySelector(".container-navigation");
	navigation.classList.toggle("navigation-off");
	// navigation.classList.add("navigation-on");
};

comments.forEach((comment) =>
	comment.addEventListener("click", handlerComment)
);

const menuIcon = document.querySelector(".menu-icon");
const exitMenu = document.querySelector(".exit-menu");
menuIcon.addEventListener("click", displayToggle);
exitMenu.addEventListener("click", displayToggle);

export default {
	containerSocialMedias,
	containerTitle,
	containerImages,
	imgTravel,
};
//Refatorar codigo e modular de forma correta tentar consumir o data localmente de Data.json e procurar a falha nesta tentativa!
