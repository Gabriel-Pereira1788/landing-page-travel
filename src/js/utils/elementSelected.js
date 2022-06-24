export const elementSelected = (elements, elementSelect, styleSet) => {
	elements.forEach((el) =>
		el != elementSelect
			? el.classList.remove(styleSet)
			: el.classList.add(styleSet)
	);
};