import { useRouter } from "next/router";
import useSteps from "@hooks/useSteps";

export default function StepPage() {
  const { getStep, steps } = useSteps();
  const { query } = useRouter();
  const stepQuery = query["step-id"];

  const step = getStep(stepQuery as string);

  if (!step) return <h1>Step not found</h1>;

  return (
    <>
      <h1>StepId: {step.name}</h1>
    </>
  );
}
