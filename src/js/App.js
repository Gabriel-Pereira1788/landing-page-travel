const containerTitle = document.querySelector(".container-headers");
const containerSocialMedias = document.querySelector(".social-medias");
const contentMain = document.querySelector(".container-main");
const containerImages = document.querySelector(".container-imgs");
const imgTravel = containerImages.querySelectorAll(".img-travel");
const urlData = "../../src/data/Data.json";
const comments = document.querySelectorAll('.comment')

const getData = (fn) => {
	fetch(urlData)
		.then((res) => res.json())
		.then((data) => fn(data))
		.catch((err) => console.log(err))
}

const renderImagesTravel = ({imagesTravel}) => {
	imgTravel.forEach((img,index) => {
		img.style.backgroundImage =`url(${imagesTravel[index].src})`
		img.querySelector('.location').textContent = imagesTravel[index].name
		img.querySelector('.seasons').textContent = imagesTravel[index].seasons
	})
}

window.addEventListener("load", () => {
	const sliderInitial = 916;
	containerTitle.classList.add("hidden-off");
	containerSocialMedias.classList.add("translateAnimationX");
	containerImages.scrollTo(sliderInitial, 0);
	getData(renderImagesTravel)
});

const elementSelected = (elements,elementSelect,styleSet) => {
	elements.forEach((el) =>
		el != elementSelect
			? el.classList.remove(styleSet)
			: el.classList.add(styleSet)
	);
};

imgTravel.forEach((img) =>
	img.addEventListener("click", (e) => {
		e.preventDefault();
		const element = e.currentTarget;
		const positionContainer = (containerImages.offsetWidth / 2) - (element.offsetWidth / 2);
		const elementPosition = element.offsetLeft - positionContainer;
		containerImages.scrollTo(elementPosition, 0);
		elementSelected(imgTravel,img,'selected');
	})
);

const handlerComment = (e) =>  {
	const element = e.currentTarget
	elementSelected(comments,element,'comment-select')
}

comments.forEach(comment => comment.addEventListener('click',handlerComment))

export default {
	containerSocialMedias,
	containerTitle,
}
//Refatorar codigo e modular de forma correta tentar consumir o data localmente de Data.json e procurar a falha nesta tentativa!
