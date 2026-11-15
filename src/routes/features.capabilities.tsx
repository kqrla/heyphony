import { createFileRoute } from "@tanstack/react-router";
import { CapabilitiesPage } from "@/components/prixy/capabilities-page";

export const Route = createFileRoute("/features/capabilities")({
  head: () => ({
    meta: [
      { title: "capabilities | inside heyphony" },
      {
        name: "description",
        content:
          "a detailed heyphony capability sheet covering setup, inbound communication, local views, and explicitly gated outbound actions.",
      },
      { property: "og:title", content: "capabilities | inside heyphony" },
      {
        property: "og:description",
        content: "what the main branch and named experimental branches actually implement.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CapabilitiesPage,
});

