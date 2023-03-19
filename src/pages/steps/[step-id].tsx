import { useRouter } from "next/router";
import useSteps from "@hooks/useSteps";
import { Button, Text } from "@mantine/core";

export default function StepPage() {
  const { getStep } = useSteps();
  const { query } = useRouter();
  const stepQuery = query["step-id"];

  const step = getStep(stepQuery as string);

  if (!stepQuery || !step)
    return <h1 className="text-center">Helytelen QR kód!</h1>;

  return (
    <div className="px-4">
      <h1 className="text-center m-0">{step.name}</h1>
      <h3 className="text-center m-0">#{step.id} Állomás</h3>

      <p className="text-justify">{step.description}</p>

      {step.text && (
        <Text fw={700} className="text-center">
          {step.text}
        </Text>
      )}

      {step.final && (
        <div className="text-center">
          <h2 className="text-center">Gratulálunk!</h2>
          <p className="text-center">
            Teljesítetted a kincskeresést! A történet befejezésének
            megtekintéséhez kattints az alábbi gombra.
          </p>
          <Button>Végeztem!</Button>
        </div>
      )}
    </div>
  );
}
