import elements from "../App.js";
import { formatDate } from "../utils/formatDate.js";

const { imgTravel } = elements;
const urlData = "./src/resourceData/Data.json";

const renderComments = ({ comments }) => {
	const commentsSection = document.querySelector(".comments-section");
	const commentsHTML = comments.map(({ date, comment }) => {
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
	}).join('');
	commentsSection.innerHTML = commentsHTML
};

const renderImgs = ({ imagesTravel }) => {
	imgTravel.forEach((img, index) => {
		img.style.backgroundImage = `url(${imagesTravel[index].src})`;
		img.querySelector(".location").textContent = imagesTravel[index].name;
		img.querySelector(".seasons").textContent = imagesTravel[index].seasons;
	});
};

const setData = (data) => {
	const dataSources = { ...data };
	renderComments(dataSources);
	renderImgs(dataSources);
};

const getData = async (fn) => {
	try {
		const response = await fetch(urlData);
		const data = await response.json();
		setData(data);
		if (!response.ok) {
			throw new Error("Erro encontrado");
		}
	} catch (err) {
		console.log(err);
	}
};

getData();
