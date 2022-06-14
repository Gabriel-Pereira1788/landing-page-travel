const headerSection = document.querySelector(".header-section");
const header = headerSection.querySelector("header");
const mainHeader = headerSection.querySelector("main");
const links = headerSection.querySelectorAll("li");

const containerTitle = document.querySelector(".container-headers");
const containerSocialMedias = document.querySelector(".social-medias");
const contentMain = document.querySelector(".container-main");

window.addEventListener("load", () => {
	containerTitle.classList.add("hidden-off");
	containerSocialMedias.classList.add("translateAnimationX");
});

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

const loadContent = (entries) => {
	Array.from(entries).forEach((entrie) => {
			if (entrie.intersectionRatio >= 0.5) {
				entrie.target.classList.remove("hidden-section");
				entrie.target.classList.add("hidden-off");
				if (entrie.target.id === "aboutUs") {
					const img = entrie.target.querySelector("img");
					img.classList.add("translateAnimationX");
				}
			}
		});
}

const observer = new IntersectionObserver(loadContent,{threshold: [0, 0.5, 1],});

Array.from(document.querySelectorAll(".container")).forEach((element) =>
	observer.observe(element)
);

window.addEventListener("scroll", scrolledDisplay);
links.forEach((link) => link.addEventListener("click", scrolledClick));
