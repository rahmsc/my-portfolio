export const particleBgColors = () => {
  const background = (darkMode = false) => (darkMode ? "#0b4150" : "#ffd8ae");
  const particle = (darkMode = false) => (darkMode ? "#fdb4a3" : "#2fa6ad");
  const links = (darkMode = false) => (darkMode ? "#268c98" : "#c04a54");
  return {
    background,
    particle,
    links,
  };
};
