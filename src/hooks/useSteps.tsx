// https://onlinehashtools.com/generate-random-md5-hash

const steps = [
  // https://ujpeteri-jatek.sarffy.dev/steps/54c381dad67e24a48cb2168e654d47f6
  {
    name: "Országzászló",
    description: "blabla",
    text: "the bro is a bro",
    hash: "54c381dad67e24a48cb2168e654d47f6",
  },
  // https://ujpeteri-jatek.sarffy.dev/steps/8f7e2f721784d07d4d2090cacb0157cd
  {
    name: "Sportkastély",
    description: "",
    text: "the bro is a bro",
    hash: "8f7e2f721784d07d4d2090cacb0157cd",
  },
  // https://ujpeteri-jatek.sarffy.dev/steps/14c5dcfc75844aec5899e8fd7532983d
  {
    name: "Luther-kápolna",
    description: "blabla",
    text: "the bro is a bro",
    hash: "14c5dcfc75844aec5899e8fd7532983d",
  },
  // https://ujpeteri-jatek.sarffy.dev/steps/3d6913c4a5edc8fec3ea115ad1f26872
  {
    name: "Kiserdő",
    description: "blabla",
    text: "the bro is a bro",
    hash: "3d6913c4a5edc8fec3ea115ad1f26872",
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
