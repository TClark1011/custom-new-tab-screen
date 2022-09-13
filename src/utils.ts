export const randomInt = (min: number, max: number) =>
	Math.floor(Math.random() * (max - min + 1) + min);

export const reversePair = <A, B>(pair: [A, B]): [B, A] => [pair[1], pair[0]];
