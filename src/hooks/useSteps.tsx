// https://onlinehashtools.com/generate-random-md5-hash

// Todo add descriptions and texts

const steps = [
  // https://ujpeteri-jatek.sarffy.dev/steps/54c381dad67e24a48cb2168e654d47f6
  {
    id: 1,
    name: "Országzászló",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.í",
    text: "A következő megálló a Sportkastély. És most menjetek és keressétek meg a következő nyomot!",
    hash: "54c381dad67e24a48cb2168e654d47f6",
  },
  // https://ujpeteri-jatek.sarffy.dev/steps/8f7e2f721784d07d4d2090cacb0157cd
  {
    id: 2,
    name: "Sportkastély",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.í",
    text: "A következő megálló a Luther-kápolna. És most menjetek és keressétek meg a következő nyomot!",
    hash: "8f7e2f721784d07d4d2090cacb0157cd",
  },
  // https://ujpeteri-jatek.sarffy.dev/steps/14c5dcfc75844aec5899e8fd7532983d
  {
    id: 3,
    name: "Luther-kápolna",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.í",
    text: "A következő megálló a Luther-kápolna. És most menjetek és keressétek meg a következő nyomot!",
    hash: "14c5dcfc75844aec5899e8fd7532983d",
  },
  // https://ujpeteri-jatek.sarffy.dev/steps/3d6913c4a5edc8fec3ea115ad1f26872
  {
    id: 4,
    name: "Kiserdő",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.í",
    hash: "3d6913c4a5edc8fec3ea115ad1f26872",
    final: true,
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
