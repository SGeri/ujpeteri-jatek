import Hero from "@components/Hero";
import Image from "next/image";
import KrepuskaImage from "@images/krepuska.jpg";
import { Button } from "@mantine/core";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Hero />

      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-row justify-center items-center px-20">
          <div>
            <Image src={KrepuskaImage} alt="Krepuska Géza" />
          </div>
          <div className="px-10 text-center">
            <span className="text-4xl font-bold">Történet</span>
            <p className="text-sm font-bold text-justify">
              What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a
              type specimen book. It has survived not only five centuries, but
              also the leap into electronic typesetting, remaining essentially
              unchanged. It was popularised in the 1960s with the release of
              Letraset sheets containing Lorem Ipsum passages, and more recently
              with desktop publishing software like Aldus PageMaker including
              versions of Lorem Ipsum.
            </p>
          </div>
        </div>

        <div className="flex flex-row justify-center items-center px-20">
          <div className="px-10 text-center">
            <span className="text-4xl font-bold">A játékról</span>
            <p className="text-sm font-bold text-justify">
              What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a
              type specimen book. It has survived not only five centuries, but
              also the leap into electronic typesetting, remaining essentially
              unchanged. It was popularised in the 1960s with the release of
              Letraset sheets containing Lorem Ipsum passages, and more recently
              with desktop publishing software like Aldus PageMaker including
              versions of Lorem Ipsum.
            </p>
          </div>
          <Image src={KrepuskaImage} alt="Krepuska Géza" />
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
