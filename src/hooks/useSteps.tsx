// https://onlinehashtools.com/generate-random-md5-hash

const steps = [
  {
    name: "Step 1",
    description: "blabla",
    text: "the bro is a bro",
    hash: "6e8c8c4939c002637d478d207fd85e3c",
  },
  {
    name: "Step 2",
    description: "blabla",
    text: "the bro is a bro",
    hash: "270f661523b604204d6f2720411c3c89",
  },
];

export default function useSteps() {
  const getStep = (hash: string) => {
    const step = steps.find((step) => step.hash === hash);

    if (!step) return false;

    return step;
  };

  return { steps, getStep };
}
