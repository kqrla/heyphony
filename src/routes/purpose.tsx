import { createFileRoute } from "@tanstack/react-router";
import {
  BigHeading,
  BriefNote,
  CellGrid,
  DocBox,
  MetaRow,
  Prose,
  PullQuote,
  StripLabel,
} from "../components/prixy/document-parts";

export const Route = createFileRoute("/purpose")({
  head: () => ({
    meta: [
      { title: "purpose | why heyphony exists" },
      {
        name: "description",
        content:
          "heyphony gives an autonomous agent a stable telephone identity and a local way to read and answer its communications.",
      },
      { property: "og:title", content: "purpose | why heyphony exists" },
      {
        property: "og:description",
        content: "one ordinary number, one agent, and communications it can actually use.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PurposePage,
});

const intentions = [
  {
    title: "make the agent reachable",
    description:
      "a conversational interface is not a phone number. heyphony gives the agent a stable place to receive texts, calls, and voicemail.",
  },
  {
    title: "keep the operator in control",
    description:
      "the carrier account, host, stored messages, and outbound permissions remain with the person running the toolkit.",
  },
  {
    title: "turn events into context",
    description:
      "normalize provider payloads, deduplicate deliveries, preserve threads, and expose the result through agent-readable views.",
  },
];

function PurposePage() {
  return (
    <div>
      <MetaRow
        fields={[
          { label: "document", value: "purpose" },
          { label: "type", value: "intent statement" },
          { label: "issue", value: "001" },
          { label: "status", value: "available in alpha" },
        ]}
      />

      <BriefNote>
        purpose sheet. what a phone number adds to an agent, before any provider or feature list.
      </BriefNote>

      <StripLabel>purpose</StripLabel>
      <BigHeading>
        let the agent
        <br />
        answer.
      </BigHeading>

      <DocBox label="statement">
        <Prose>
          <p>
            agents can already work inside chat windows and tools. heyphony exists to connect that
            intelligence to the ordinary number people and services already know how to call or text.
          </p>
          <PullQuote>one number. one agent. one message at a time.</PullQuote>
          <p>
            the purpose is not more outbound noise. it is a durable, inspectable communication
            surface that an agent can read first and act on only when allowed.
          </p>
        </Prose>
      </DocBox>

      <DocBox label="what it is for">
        <CellGrid items={intentions} />
      </DocBox>
    </div>
  );
}
