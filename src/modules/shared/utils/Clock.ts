export const clock = {
    now: () => new Date(),
};
  
export type Clock = {
    now: () => Date;
};
