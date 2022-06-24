export const pageAnimation = {
  hidden: {
    opacity: 0,
    y: 150,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
  exit: {
    opacity: 0,
    y: 150,
    transition: {
      duration: 0.5,
    },
  },
};

export const pageHeading = {
  hidden: {
    height: 0,
  },
  show: {
    height: "65vh",
    transition: {
      delay: 1,
      duration: 1,
      ease: "easeOut",
    },
  },
};

export const paragraph = {
  hidden: {
    opacity: 0,
    y: 10,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 1,
      duration: 0.5,
      ease: "easeOut",
    },
  },
}
