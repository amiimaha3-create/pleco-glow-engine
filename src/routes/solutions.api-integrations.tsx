import { createFileRoute } from "@tanstack/react-router";
import { SolutionDetailTemplate, buildSolutionHead } from "@/components/solutions/SolutionDetailTemplate";
import { SOLUTIONS } from "@/lib/solutions/data";

const config = SOLUTIONS["api-integrations"];

export const Route = createFileRoute("/solutions/api-integrations")({
  head: () => buildSolutionHead(config),
  component: () => <SolutionDetailTemplate config={config} />,
});
