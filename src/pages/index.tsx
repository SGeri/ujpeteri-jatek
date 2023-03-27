import Hero from "@components/Hero";
import Image from "next/image";
import KrepuskaImage from "@images/krepuska.jpg";
import TreasureMap from "@images/treasure_map.png";
import { Button } from "@mantine/core";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Hero />

      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col-reverse lg:flex-row justify-center items-center px-4">
          <div>
            <Image
              src={KrepuskaImage}
              alt="Krepuska Géza"
              className="w-auto h-auto lg:w-80"
            />
          </div>
          <div className="p-10 text-center">
            <span className="text-4xl font-bold">Történet</span>
            <p className="text-sm font-bold ">
              Az 1900-as évek elején Krepuska Géza főleg fülgyógyászattal
              foglalatoskodott. Sok idejét fektette a tudásának bővítésével, és
              egyéni előadásokati is tartott az elért eredményeiről. Egy szép
              délutánon éppen a konyhában tevékenykedett, mikor rájött egy sok
              fejfájást okozó halálos fülbetegség egy lehetséges gyógymódjára.
              Egyből az írógépéhez sietett, ahol elkezdte leírni, hogy hogyan is
              kellene ezt megvalósítani.
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-center items-center px-4">
          <div className="p-10 text-center">
            <span className="text-4xl font-bold">A játékról</span>
            <p className="text-sm font-bold">
              A játék célja, hogy kiszabadítsátok Krepuska Gézát a fogságból. A
              játékban állomásokat kell követni, amelyekhez útmutatásokat és
              rejtélyeket adunk, hogy segítsenek nektek megtalálni a következő
              helyszínt és végül Krepuska Gézát. A játék során a résztvevők
              körülbelül 45 perc alatt bejárják az egész telepet, annak
              legfontosabb látványosságait. Minden állomás egy-egy feladatot
              tartalmaz, amelynek megoldása után kapjátok meg a következő
              utasítást. Az állomások változatosak és kihívást jelenthetnek
              minden korosztálynak, azonban a játék elsősorban családoknak
              ajánlott, akik együtt szeretnék felfedezni az Újpéteritelepet. A
              játékot úgy terveztük, hogy az egész család számára szórakoztató
              és érdekes legyen. A keresés során felfedezhetitek az
              Újpéteritelep szépségeit és érdekességeit. Ha szeretnétek kalandos
              és izgalmas időt tölteni Újpéteritelepen, akkor várunk benneteket
              a kincskeresősjátékban!
            </p>
          </div>
          <Image
            src={TreasureMap}
            alt="Krepuska Géza"
            className="w-auto h-auto lg:w-80"
          />
        </div>

        <div className="flex justify-center items-center mt-4">
          <Link href="/start">
            <Button variant="gradient" size="xl" radius="xl">
              Kezdjük a játékot!
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}
