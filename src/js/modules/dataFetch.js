const urlData = "./src/resourceData/Data.json";

export const getData = async (fn) => {
	try {
		const response = await fetch(urlData);
		const data = await response.json();
		fn(data);
		if (!response.ok) {
			throw new Error("Erro encontrado");
		}
	} catch (err) {
		console.log(err);
	}
};
