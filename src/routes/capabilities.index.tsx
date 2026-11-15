import { createFileRoute } from "@tanstack/react-router";
import { CapabilitiesPage } from "@/components/prixy/capabilities-page";

export const Route = createFileRoute("/capabilities/")({
  head: () => ({
    meta: [
      { title: "capabilities | heyphony" },
      {
        name: "description",
        content:
          "a detailed heyphony capability sheet covering setup, inbound communication, local views, and explicitly gated outbound actions.",
      },
      { property: "og:title", content: "capabilities | heyphony" },
      {
        property: "og:description",
        content: "setup, inbound communication, and explicitly gated outbound actions in heyphony.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CapabilitiesPage,
});

