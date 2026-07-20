import { createFileRoute } from "@tanstack/react-router";
import { SolutionDetailTemplate, buildSolutionHead } from "@/components/solutions/SolutionDetailTemplate";
import { SOLUTIONS } from "@/lib/solutions/data";

const config = SOLUTIONS["mobile-app-development"];

export const Route = createFileRoute("/solutions/mobile-app-development")({
  head: () => buildSolutionHead(config),
  component: () => <SolutionDetailTemplate config={config} />,
});
