import { createFileRoute } from "@tanstack/react-router";
import {
  BigHeading,
  BriefNote,
  DocBox,
  MetaRow,
  NumberedList,
  Prose,
  StripLabel,
} from "../components/prixy/document-parts";

export const Route = createFileRoute("/roadmap")({
  head: () => ({
    meta: [
      { title: "roadmap | where heyphony goes next" },
      {
        name: "description",
        content:
          "heyphony's path from a local telephone inbox to verified providers, stronger calling tools, and carefully gated communication surfaces.",
      },
      { property: "og:title", content: "roadmap | where heyphony goes next" },
      {
        property: "og:description",
        content: "ordered by implementation evidence and operational proof, not fictional release dates.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: RoadmapPage,
});

const stages = [
  {
    title: "now / make the baseline legible",
    description:
      "number setup, sms intake, a deduplicated local inbox, read marks, threads, call history, voicemail import, cli access, and a local browser interface.",
  },
  {
    title: "prove / real carrier deliveries",
    description:
      "exercise each provider model with real accounts, actual sms delivery, voice registration, and media. adapter presence alone does not close this stage.",
  },
  {
    title: "integrate / the mcp tool surface",
    description:
      "carry the broadest branch's structured tools, javascript sdk, allow and lookup integration, calling code, and live timeline through repeatable end-to-end checks.",
  },
  {
    title: "harden / deployment and data boundaries",
    description:
      "document tls, provider authentication, restrictive file permissions, retention, rate limits, service management, and safe remote access without generalizing one branch's gates to every branch.",
  },
  {
    title: "extend / calling and device control",
    description:
      "move from local audio and simulated ring proofs toward real registered calls, reliable handoffs, and clearly bounded android or ios support.",
  },
  {
    title: "available / omnichannel and meetings through clawtel",
    description:
      "omni and meetings already work through clawtel. distinguish this working delivery surface from the standalone heyphony branches.",
  },
];

function RoadmapPage() {
  return (
    <div>
      <MetaRow
        fields={[
          { label: "document", value: "roadmap" },
          { label: "type", value: "evidence sequence" },
          { label: "issue", value: "006" },
          { label: "status", value: "no invented dates" },
        ]}
      />

      <BriefNote>
        ordered by confidence and proof, not by date. branch names show where the current work lives.
      </BriefNote>

      <StripLabel>roadmap</StripLabel>
      <BigHeading>
        first receive.
        <br />
        then prove.
      </BigHeading>

      <DocBox label="intent">
        <Prose>
          <p>
            the goal is not to make every channel look finished. it is to make one ordinary phone
            number dependable, inspectable, and useful to an agent before widening the surface.
          </p>
        </Prose>
      </DocBox>

      <DocBox label="stages">
        <NumberedList items={stages} />
      </DocBox>
    </div>
  );
}
