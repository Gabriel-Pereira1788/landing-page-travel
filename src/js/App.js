const containerTitle = document.querySelector(".container-headers");
const logoImg = document.querySelector('.logo')
const containerSocialMedias = document.querySelector(".social-medias");
const contentMain = document.querySelector(".container-main");
const containerImages = document.querySelector(".container-imgs");
const imgTravel = containerImages.querySelectorAll(".img-travel");

window.addEventListener("load", () => {
	const sliderInitial = 916;
	containerTitle.classList.add("hidden-off");
	containerSocialMedias.classList.add("translateAnimationX");
	containerImages.scrollTo(sliderInitial, 0);
});

const displayToggle = () => {
	const navigation = document.querySelector(".container-navigation");
	navigation.classList.toggle("navigation-off");
};

const menuIcon = document.querySelector(".menu-icon");
const exitMenu = document.querySelector(".exit-menu");
menuIcon.addEventListener("click", displayToggle);
exitMenu.addEventListener("click", displayToggle);
logoImg.addEventListener('click', () => document.location.reload(true))
export default {
	containerSocialMedias,
	containerTitle,
	containerImages,
	imgTravel,
};
//Refatorar codigo e modular de forma correta tentar consumir o data localmente de Data.json e procurar a falha nesta tentativa!
