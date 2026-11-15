import { createFileRoute } from "@tanstack/react-router";
import { Phone, Server } from "lucide-react";
import { BigHeading, CellGrid, MetaRow, StripLabel } from "@/components/prixy/document-parts";

export const Route = createFileRoute("/cloud")({
  head: () => ({ meta: [
    { title: "cloud | heyphony — coming soon" },
    { name: "description", content: "Coming soon from Heyphony: phone numbers only, or a phone number with a persistent cloud phone." },
    { property: "og:title", content: "cloud | heyphony — coming soon" },
    { property: "og:description", content: "Phone numbers only. Phone number + persistent cloud phone. Coming soon." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary" },
  ] }),
  component: CloudPage,
});

function CloudPage() {
  return <div>
    <MetaRow fields={[{ label: "document", value: "cloud" }, { label: "status", value: "coming soon" }]} />
    <StripLabel>heyphony cloud</StripLabel>
    <BigHeading>cloud</BigHeading>
    <StripLabel>coming soon</StripLabel>
    <CellGrid columns={2} items={[
      { title: "phone numbers only", description: "", marker: "coming soon", icon: <Phone size={18} />, muted: true },
      { title: "phone number + persistent cloud phone", description: "", marker: "coming soon", icon: <Server size={18} />, muted: true },
    ]} />
  </div>;
}