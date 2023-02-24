export const validateGetLocationForm = (inputValue) => {
	if (inputValue.trim().length === 0) {
		return false;
	}
	return true;
};
