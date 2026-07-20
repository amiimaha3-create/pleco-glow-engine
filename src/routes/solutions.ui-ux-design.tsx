import { createFileRoute } from "@tanstack/react-router";
import { SolutionDetailTemplate, buildSolutionHead } from "@/components/solutions/SolutionDetailTemplate";
import { SOLUTIONS } from "@/lib/solutions/data";

const config = SOLUTIONS["ui-ux-design"];

export const Route = createFileRoute("/solutions/ui-ux-design")({
  head: () => buildSolutionHead(config),
  component: () => <SolutionDetailTemplate config={config} />,
});
