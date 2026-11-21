import { createFileRoute, Link } from "@tanstack/react-router";
import {
  BigHeading,
  BriefNote,
  CellGrid,
  DocBox,
  MetaRow,
  NumberedList,
  Prose,
  PullQuote,
  StripLabel,
} from "../components/prixy/document-parts";

export const Route = createFileRoute("/problem")({
  head: () => ({
    meta: [
      { title: "problem | agents need ordinary phone access" },
      {
        name: "description",
        content:
          "the problems heyphony responds to: fragmented messages, unreachable agents, host-held credentials, and risky outbound automation.",
      },
      { property: "og:title", content: "problem | agents need ordinary phone access" },
      {
        property: "og:description",
        content: "the telephone system works, but its accounts and protocols were not shaped for autonomous agents.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProblemPage,
});

const symptoms = [
  {
    title: "no stable place to call",
    description:
      "an agent may have a chat thread or an api key, but no ordinary number that can receive a call or text.",
  },
  {
    title: "scattered communication state",
    description:
      "sms webhooks, carrier emails, missed-call records, and voicemail attachments arrive in different shapes and places.",
  },
  {
    title: "ephemeral agent sessions",
    description:
      "a temporary tool process is a poor home for a long-lived sip registration, provider credential, or inbound webhook listener.",
  },
  {
    title: "inbound reachability",
    description:
      "a carrier can hold a message, but a webhook still needs an awake, reachable host. a sleeping laptop is not public infrastructure.",
  },
  {
    title: "outbound risk",
    description:
      "the moment an agent can send or dial, recipient choice, spending, permission, and frequency become explicit policy questions.",
  },
  {
    title: "provider fragmentation",
    description:
      "carriers differ in voice registration, sms delivery, email fallback, trunking, and api support. one generic promise hides real differences.",
  },
];

const whyNow = [
  {
    title: "telephony assumes a human endpoint",
    description:
      "softphones, inboxes, and account dashboards were built around a person tapping and reading. agents need structured events and deliberate tools instead.",
  },
  {
    title: "agent tools assume easy connectivity",
    description:
      "an ephemeral runtime can call an api, but keeping a number registered and an inbound route alive requires a persistent operational home.",
  },
  {
    title: "automation needs narrower authority",
    description:
      "giving an agent every outbound capability by default is not autonomy; it is unbounded permission. the useful interface starts with reading and gates action.",
  },
];

function ProblemPage() {
  return (
    <div>
      <MetaRow
        fields={[
          { label: "document", value: "problem" },
          { label: "type", value: "problem statement" },
          { label: "issue", value: "001" },
          { label: "status", value: "available in alpha" },
        ]}
      />

      <BriefNote>
        the problem is not a shortage of communication channels. it is making ordinary telephone
        events reliable, legible, and safely actionable for an agent.
      </BriefNote>

      <StripLabel>problem</StripLabel>
      <BigHeading>
        the agent
        <br />
        has tools.
        <br />
        it needs a
        <br />
        number.
      </BigHeading>

      <DocBox label="symptoms">
        <CellGrid items={symptoms} />
      </DocBox>

      <DocBox label="why it persists">
        <NumberedList items={whyNow} />
      </DocBox>

      <DocBox label="the gap">
        <Prose>
          <PullQuote>the carrier delivers events. the agent needs a coherent communications interface.</PullQuote>
          <p>
            heyphony fills that gap with local normalization, storage, views, and carefully scoped
            outward actions rather than another closed communications dashboard.
          </p>
        </Prose>
        <div className="mt-4">
          <Link
            to="/purpose"
            className="border-b border-primary text-[10px] uppercase tracking-[0.12em] text-primary"
          >
            read the purpose
          </Link>
        </div>
      </DocBox>
    </div>
  );
}
