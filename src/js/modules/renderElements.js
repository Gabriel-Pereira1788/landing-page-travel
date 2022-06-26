import elements from "../App.js";
import { formatDate } from "../utils/formatDate.js";
import { getData } from "./dataFetch.js";
import { elementSelected } from "../utils/elementSelected.js";
const { imgTravel } = elements;

const renderComments = ({ comments }) => {
	const commentsSection = document.querySelector(".comments-section");
	const commentsHTML = comments
		.map(({ date, comment }) => {
			return `<div class="comment">
					<span class="set-comment"></span>
						<div>
							<span>${formatDate(date)}</span>
							<p>
								${comment}
							</p>
							<hr />
						</div>
				</div>`;
		})
		.join("");
	commentsSection.innerHTML = commentsHTML;

	const commentsElements = document.querySelectorAll(".comment");

	commentsElements.forEach((comment) =>
		comment.addEventListener("click", (e) => {
			const element = e.currentTarget;
			elementSelected(commentsElements, element, "comment-select");
		})
	);
};

const renderImgs = ({ imagesTravel }) => {
	imgTravel.forEach((img, index) => {
		img.style.backgroundImage = `url(${imagesTravel[index].src})`;
		img.querySelector(".location").textContent = imagesTravel[index].name;
		img.querySelector(".seasons").textContent = imagesTravel[index].seasons;
	});
};

const renderElements = (data) => {
	const dataSources = { ...data };
	renderComments(dataSources);
	renderImgs(dataSources);
};

getData(renderElements);
