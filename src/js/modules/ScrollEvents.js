import elements from "../App.js";
const { containerTitle, containerSocialMedias } = elements;
const headerSection = document.querySelector(".header-section");
const header = headerSection.querySelector("header");
const mainHeader = headerSection.querySelector("main");
const links = headerSection.querySelectorAll("li");

const getHeight = (element) => element.getBoundingClientRect().height;

const scrolledDisplay = (e) => {
	window.scrollY > getHeight(header)
		? header.classList.add("headerScrolled")
		: header.classList.remove("headerScrolled");

	window.scrollY > getHeight(containerTitle)
		? (containerTitle.classList.remove("hidden-off"),
		  containerSocialMedias.classList.remove("translateAnimationX"))
		: (containerTitle.classList.add("hidden-off"),
		  containerSocialMedias.classList.add("translateAnimationX"));
};

const scrolledClick = (e) => {
	e.preventDefault();
	const tagLink = e.currentTarget.querySelector("a");
	const id = tagLink.getAttribute("href").slice(1);
	const element = document.getElementById(id);
	const scrollPosition = element.offsetTop - getHeight(header);

	window.scrollTo({
		left: 0,
		top: scrollPosition,
	});
};

const elementsAnimations = {
	aboutUs: (element) => element.querySelector("img").classList.add("translateAnimationX"),
	carousel:(element) => element.classList.add("translateAnimationY"),
};

const loadContent = (entries) => {
	Array.from(entries).forEach((entrie) => {
		const element = entrie.target;
		if (entrie.intersectionRatio >= 0.5) {
			element.classList.remove("hidden-section");
			element.classList.add("hidden-off");
			elementsAnimations[element.id]
				? elementsAnimations[element.id](element)
				: false;
		}
	});
};

const observer = new IntersectionObserver(loadContent, {
	threshold: [0, 0.5, 1],
});

Array.from(document.querySelectorAll(".container")).forEach((element) =>
	observer.observe(element)
);

window.addEventListener("scroll", scrolledDisplay);
links.forEach((link) => link.addEventListener("click", scrolledClick));
