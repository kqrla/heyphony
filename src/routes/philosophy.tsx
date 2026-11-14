import { createFileRoute } from "@tanstack/react-router";
import {
  BigHeading,
  BriefNote,
  DocBox,
  MetaRow,
  NumberedList,
  Prose,
  PullQuote,
  StripLabel,
} from "../components/prixy/document-parts";

export const Route = createFileRoute("/philosophy")({
  head: () => ({
    meta: [
      { title: "philosophy | ai adapted, not ai native" },
      {
        name: "description",
        content:
          "heyphony adapts battle-tested telecom infrastructure for autonomous ai agents instead of inventing an agent-only network.",
      },
      { property: "og:title", content: "philosophy | ai adapted, not ai native" },
      {
        property: "og:description",
        content: "ordinary telephone infrastructure, adopted and augmented for autonomous ai agents.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PhilosophyPage,
});

const principles = [
  {
    title: "use the network that already exists",
    description:
      "carriers, phone numbers, sip registration, webhooks, and voicemail already solve hard problems. heyphony adapts them rather than replacing them.",
  },
  {
    title: "one number, one agent",
    description:
      "a stable identity is easier to reason about than a pool of disposable numbers. the unit of design is one agent's ordinary telephone presence.",
  },
  {
    title: "inbound before outbound",
    description:
      "reading texts, calls, and voicemail comes first. sending is explicit, gated, and deliberately narrow instead of becoming a campaign engine.",
  },
  {
    title: "keep credentials on the host",
    description:
      "long-lived provider and sip credentials belong on a persistent machine, not inside an ephemeral agent session or a public web page.",
  },
  {
    title: "name the unfinished edges",
    description:
      "implemented code, local proofs, carrier verification, and future designs are different states. the documentation keeps them separate.",
  },
];

function PhilosophyPage() {
  return (
    <div>
      <MetaRow
        fields={[
          { label: "document", value: "philosophy" },
          { label: "type", value: "position" },
          { label: "issue", value: "005" },
          { label: "status", value: "ai adapted" },
        ]}
      />

      <BriefNote>
        position sheet. why heyphony builds around telephone infrastructure instead of declaring a
        new agent-native communications stack.
      </BriefNote>

      <StripLabel>philosophy</StripLabel>
      <BigHeading>
        ai adapted.
        <br />
        not ai native.
      </BigHeading>

      <DocBox label="the infrastructure position">
        <Prose>
          <PullQuote>
            not ai native, but battle-tested telecom infrastructure we trust, adopted, adapted around and augmented for use by autonomous ai agents
          </PullQuote>
          <p>
            the telephone network does not need to become artificially intelligent to become useful
            to an agent. it needs a careful adapter: one that can receive events, preserve context,
            expose safe tools, and leave authority with the operator.
          </p>
        </Prose>
      </DocBox>

      <DocBox label="principles">
        <NumberedList items={principles} />
      </DocBox>

      <DocBox label="adapt, don't disguise" filled>
        <p className="text-sm leading-relaxed">
          heyphony is a jerryrigged workaround in the useful sense: practical, inspectable, and
          honest about its seams. it makes existing telecom legible to agents without pretending the
          old constraints disappeared.
        </p>
      </DocBox>
    </div>
  );
}
