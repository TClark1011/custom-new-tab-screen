import { A, F, flow, N, O, pipe } from '@mobily/ts-belt';

export const randomInt = (min: number, max: number) =>
	Math.floor(Math.random() * (max - min + 1) + min);

export const takeRandom = <T>(arr: T[]) => pipe(arr, A.shuffle, A.head, O.toUndefined);

export const randomChance = (chance: number) => N.lte(Math.random(), chance);

export const takeRandomUntilSatisfied = <T>(
	arr: T[],
	condition: (p: T) => boolean
): T | undefined => pipe(arr, A.shuffle, A.find(condition), O.toUndefined);

export const reversePair = <A, B>(pair: [A, B]): [B, A] => [pair[1], pair[0]];
