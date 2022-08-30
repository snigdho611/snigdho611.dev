export const getAllSkills = async () => {
  try {
    const result = await fetch(`${process.env.DEVAPI}skills`);
    const data = await result.json();
    return data;
  } catch (e) {
    return null;
  }
};
