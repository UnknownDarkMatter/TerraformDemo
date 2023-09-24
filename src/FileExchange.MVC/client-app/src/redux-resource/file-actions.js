import { ADD_FILE, GET_FILES } from "./constants";

export const addNewFile = (item) => {
	return {
		type:ADD_FILE,
		payload:item
	};
}

export const getFiles = () => {
	return {
		type:GET_FILES,
	};
}
