import { createFileRoute } from "@tanstack/react-router";
import { SolutionDetailTemplate, buildSolutionHead } from "@/components/solutions/SolutionDetailTemplate";
import { SOLUTIONS } from "@/lib/solutions/data";

const config = SOLUTIONS["analytics-dashboards"];

export const Route = createFileRoute("/solutions/analytics-dashboards")({
  head: () => buildSolutionHead(config),
  component: () => <SolutionDetailTemplate config={config} />,
});
