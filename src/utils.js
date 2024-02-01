import differenceInDays from "date-fns/differenceInDays";

export function formatPrice(price) {
	return `$${price / 100}`;
}

export function pluralize(string, num) {
	return num === 1 ? `1 ${string}` : `${num} ${string}s`;
}

export function isNewShoe(releaseDate) {
	return differenceInDays(new Date(), releaseDate) < 30;
}
