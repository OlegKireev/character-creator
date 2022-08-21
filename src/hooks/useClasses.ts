import { CLASSES } from 'constants/classes';

export const useClasses = () => {
  const names = CLASSES.map((className) => className.name);

  return {
    classes: CLASSES,
    names,
  };
};
