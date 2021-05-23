import { secondsToMinutes } from './secondsToMinutes';
import { zeroLeft } from './zeroLeft';

export const secondsToTime = (seconds: number): string => {
  const hours = zeroLeft(seconds / 3600);

  return `${hours}:${secondsToMinutes(seconds)}`;
};
