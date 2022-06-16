
const containerTitle = document.querySelector(".container-headers");
const containerSocialMedias = document.querySelector(".social-medias");
const contentMain = document.querySelector(".container-main");
const containerImages = document.querySelector(".container-imgs");
const imgTravel = containerImages.querySelectorAll(".img-travel");
const urlData = "../../src/data/Data.json";

const getData = (fn) => {
	fetch(urlData)
		.then((res) => res.json())
		.then((data) => fn(data))
		.catch((err) => console.log(err))
}

const renderImagesTravel = (data) => {
	imgTravel.forEach((img,index) => {
		img.style.backgroundImage =`url(${data[index].src})`
		img.querySelector('.location').textContent = data[index].name
		img.querySelector('.seasons').textContent = data[index].seasons
	})
}

window.addEventListener("load", () => {
	const sliderInitial = 916;
	containerTitle.classList.add("hidden-off");
	containerSocialMedias.classList.add("translateAnimationX");
	containerImages.scrollTo(sliderInitial, 0);
	getData(renderImagesTravel)
});

const imgSelected = (imgSelect) => {
	imgTravel.forEach((img) =>
		img != imgSelect
			? img.classList.remove("selected")
			: img.classList.add("selected")
	);
};

imgTravel.forEach((img) =>
	img.addEventListener("click", (e) => {
		e.preventDefault();
		const element = e.currentTarget;
		const positionContainer = containerImages.offsetWidth / 2;
		const elementPosition = element.offsetLeft - positionContainer + 97;
		containerImages.scrollTo(elementPosition, 0);
		imgSelected(img);
	})
);

export default {
	containerSocialMedias,
	containerTitle,
}
//Refatorar codigo e modular de forma correta tentar consumir o data localmente de Data.json e procurar a falha nesta tentativa!
