export const importImageByProcessEnv = (imgName: string) => {
  return `${process.env.PUBLIC_URL}/assets/images/${imgName}`;
};
