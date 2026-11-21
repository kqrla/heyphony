import { createFileRoute, Link } from "@tanstack/react-router";
import {
  BigHeading,
  BriefNote,
  CellGrid,
  DocBox,
  MetaRow,
  StripLabel,
} from "../components/prixy/document-parts";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "heyphony | a phone number for your ai agent" },
      {
        name: "description",
        content:
          "heyphony gives an ai agent an ordinary phone number, with a self-hosted inbox for texts, calls, and voicemail.",
      },
      { property: "og:title", content: "heyphony | a phone number for your ai agent" },
      {
        property: "og:description",
        content: "ordinary telephony, adapted for autonomous agents and hosted on infrastructure you control.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const theLoop = [
  {
    marker: "01",
    title: "choose a number",
    description: "bring a compatible did from a telephone provider you already trust.",
  },
  {
    marker: "02",
    title: "register the host",
    description: "keep the sip registration and long-lived credentials on a persistent machine.",
  },
  {
    marker: "03",
    title: "catch the texts",
    description: "receive provider webhooks or carrier email and normalize them into one local inbox.",
  },
  {
    marker: "04",
    title: "read the calls",
    description: "inspect call history, missed calls, threads, and voicemail through agent-friendly views.",
  },
  {
    marker: "05",
    title: "give it tools",
    description: "use the cli, local browser interface, or the mcp branch's structured agent tools.",
  },
  {
    marker: "06",
    title: "act deliberately",
    description: "outbound messages stay behind explicit permission gates, one recipient at a time.",
  },
];

const notThese = [
  {
    title: "not a campaign dialer.",
    description: "one number, one agent, one message at a time. no bulk lists, retries, or sales queues.",
  },
  {
    title: "not a hosted phone service.",
    description: "the number and carrier account remain yours. the toolkit runs on a host you control.",
  },
  {
    title: "not a finished voice personality.",
    description: "the baseline connects communication rails; it does not pretend every conversation is autonomous.",
  },
];

function Index() {
  return (
    <div>
      <MetaRow
        fields={[
          { label: "document", value: "index" },
          { label: "type", value: "agent phone toolkit" },
          { label: "issue", value: "001" },
          { label: "status", value: "source-available" },
        ]}
      />

      <BriefNote>
        heyphony gives your ai agents a dedicated phone number it can keep and use across services and platforms by adopting, adapting and augmenting existing battle tested telecom infra for agentic use.
      </BriefNote>

      <StripLabel>the phone number</StripLabel>

      <BigHeading>
        GIVE AUTONOMOUS AGENT A PHONE NUMBER TO REACH ACROSS SERVICES
      </BigHeading>

      <StripLabel>introduction</StripLabel>
      <div className="grid grid-cols-1 gap-6 border-x border-b border-primary px-4 py-6 md:grid-cols-2">
        <p className="text-base leading-relaxed">
          connect an ordinary provider-owned number to a persistent host, then expose its messages
          and calls through commands and structured data.
        </p>
        <p className="text-sm leading-relaxed text-muted-foreground">
          no agent-only phone network. no new communications protocol. just the existing telephone
          system, adapted around the way an autonomous agent actually works.
        </p>
      </div>

      <DocBox label="the number loop">
        <CellGrid items={theLoop} />
      </DocBox>

      <DocBox label="what heyphony is not">
        <CellGrid items={notThese} />
      </DocBox>

      <DocBox label="one number, one local view" filled>
        <p className="text-lg leading-snug">
          a text arrives at the carrier. the catcher normalizes it. the local inbox deduplicates it.
          your agent reads the thread and decides what, if anything, should happen next.
        </p>
        <p className="mt-4 font-display text-4xl font-black uppercase tracking-tight">
          text · call · voicemail
        </p>
      </DocBox>

      <div className="flex flex-wrap gap-4 border-x border-b border-primary px-4 py-4">
        <Link
          to="/features"
          className="border-b border-primary text-[10px] uppercase tracking-[0.12em] text-primary"
        >
          read the features
        </Link>
        <Link
          to="/features/supports"
          className="border-b border-primary text-[10px] uppercase tracking-[0.12em] text-primary"
        >
          provider coverage
        </Link>
        <Link
          to="/philosophy"
          className="border-b border-primary text-[10px] uppercase tracking-[0.12em] text-primary"
        >
          why existing telecom
        </Link>
      </div>
    </div>
  );
}
