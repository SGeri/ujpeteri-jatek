// https://onlinehashtools.com/generate-random-md5-hash

// Todo add descriptions and texts

const steps = [
  // https://ujpeteri-jatek.sarffy.dev/steps/54c381dad67e24a48cb2168e654d47f6
  {
    id: 1,
    name: "Országzászló",
    description:
      "Krepuska Géza megérkezett a jelenbe, ahol meglátta a pestszentimrei országzászlót. Ezelőtt ezt ő még nem láthatta, mivel 1990-ben adták át a lakossági adományokból, önkéntes munka segítségével elkészült országzászlót. Ez volt az első és egyelőre utolsó benyomása az újkori Újpéteritelepről, mert elfogták és elhurcolták a gonosz emberek.",
    text: "A földön vérnyomokat találtok. Kövessétek őket a Sportkastélyig! És most siessetek, hogy még élve megtaláljátok az orvost!",
    hash: "54c381dad67e24a48cb2168e654d47f6",
  },
  // https://ujpeteri-jatek.sarffy.dev/steps/8f7e2f721784d07d4d2090cacb0157cd
  {
    id: 2,
    name: "Sportkastély",
    description:
      "Szerencsére találtunk lábnyomokat amik a Pestszentimrei Sportkastélyhoz vezettek. Mivel az ő idejükben a sportkastély még a Lővy kastély volt, attól féltek hogy Krepuska Géza ott rejtette el egy részét a gyógyírnek. Ekkor viszont még nem tudták, hogy a kétezres években átépítették a kastélyt, és az eredeti épületből nem maradt meg semmi. Ennélfogva csalódottan tovább hurcolták Krepuska Gézát a közelinek hallatszó harangszó fele.",
    text: "A harangszó csak egyet jelenthet: a következő megálló a Luther-kápolna.",
    hash: "8f7e2f721784d07d4d2090cacb0157cd",
  },
  // https://ujpeteri-jatek.sarffy.dev/steps/14c5dcfc75844aec5899e8fd7532983d
  {
    id: 3,
    name: "Luther-kápolna",
    description:
      "Hát ez a bizonyos harangszó nem jött máshonnan, mint a nem is olyan rég (2016-ban) átadott Luther kápolna felől. Ám ezek az urak vallásosak voltak, evangélikusak, akár csak a kápolna, amelyet még meg is áldott a Magyarországi Evangélikus Egyház elnök-püspöke. A jövőben, ahonnan ők jöttek, ott nagyon fontos a vallás az emberek számára, mert már nem maradt más ami megszínesítse napjaikat. Mégsem hagyhatták volna, hogy saját Istenük elítélje őket a múlt- és jelenbéli tetteikért, ezért azt tartották a legjobbnak ha elbújnak az Isten szemei előtt és ott faggatják ki Krepuskát. Erre a célra egy felülről eltakart helyet kerestek, takaró objektumnak pedig a fák teljesen megfeleltek.",
    text: "A földön újra vérnyomokat találtok. Kövessétek őket a Kiserdőig! Talán már végeztek is vele, mindenképp sietnetek kell, hogy még élve megtaláljátok az orvost!",
    hash: "14c5dcfc75844aec5899e8fd7532983d",
  },
  // https://ujpeteri-jatek.sarffy.dev/steps/3d6913c4a5edc8fec3ea115ad1f26872
  {
    id: 4,
    name: "Kiserdő",
    description:
      "A rosszfiúk ezt a helyet szánták optimálisnak arra, hogy kiszedjék Krepuskából azt az információt, hogy hol rejtette el a titkos ellenszert. Krepuska pedig előbb lett volna kész meghalni, minthogy elmondja nekik. A fenyegetések ellenére ő teljesen hidegvérrel ült ott a földön megkötözve. Mikor közeledtek a kiserdőhöz, már halljátok Krepuska segítséget remélő kiáltásait. Elkezdtek futni, rohanni és megérkeztek a játszótérhez, ahol meglátjátok ott ülni őt, és a jövőbeli fickókat. A gonosztevők lelepleződtek, és mivel kitudódott kilétük, ezért egyszerűséggel megszűntek lézezni. Eloldozzátok Krepuskát, aki nagyon nagy hálálkodással esik nektek, mivel megmentettétek az életét és a világ életét is egyaránt.",
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
