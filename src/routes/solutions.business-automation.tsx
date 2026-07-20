import { createFileRoute } from "@tanstack/react-router";
import { SolutionDetailTemplate, buildSolutionHead } from "@/components/solutions/SolutionDetailTemplate";
import { SOLUTIONS } from "@/lib/solutions/data";

const config = SOLUTIONS["business-automation"];

export const Route = createFileRoute("/solutions/business-automation")({
  head: () => buildSolutionHead(config),
  component: () => <SolutionDetailTemplate config={config} />,
});
