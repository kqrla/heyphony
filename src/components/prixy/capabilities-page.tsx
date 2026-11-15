import { Link } from "@tanstack/react-router";
import { BigHeading, BriefNote, CellGrid, DocBox, MetaRow, NumberedList, StripLabel } from "@/components/prixy/document-parts";

const setup = [
  {
    title: "choose a provider and did",
    description:
      "start with a carrier account and a compatible number. provider capabilities differ across voice registration, trunking, sms, and email delivery.",
  },
  {
    title: "prepare the sip client",
    description:
      "configure linphone and read its local databases for call history and communication context.",
  },
  {
    title: "make inbound delivery reachable",
    description:
      "configure a provider webhook to an awake public host or tunnel, or use an appropriate carrier-email route where supported.",
  },
  {
    title: "run doctor and prove delivery",
    description:
      "inspect configuration, then send a real text or place a real call. installation alone does not prove carrier routing, media, or credentials.",
  },
];

const inbound = [
  {
    title: "normalized messages",
    description:
      "json, form, and query-string deliveries become common records with sender, recipient, body, timestamps, and the raw provider payload.",
  },
  {
    title: "deduplication and read state",
    description:
      "provider ids prevent repeated deliveries from multiplying messages; separate read marks keep viewing state explicit.",
  },
  {
    title: "threads and missed calls",
    description:
      "local views group communication into threads and expose missed calls, messages, voicemail, and call history.",
  },
  {
    title: "carrier email import",
    description:
      "parse supported carrier email, retain message content, and import attachments such as voicemail audio into the local workflow.",
  },
  {
    title: "read-only call history",
    description:
      "the linphone sqlite databases are opened read-only so the toolkit can inspect history without treating the client's database as its own write store.",
  },
  {
    title: "live voice + text timeline",
    description:
      "on mcp, concurrent sip events and http messages enter one sequenced in-memory timeline for the running session.",
  },
];

const outbound = [
  {
    title: "single-recipient sms",
    description:
      "main includes http adapters for voip.ms, flowroute, and signalwire. sending requires both the environment opt-in and explicit send authorization.",
  },
  {
    title: "voicemail worker",
    description:
      "generated livekit agents and openai tts worker code exists, but the baseline still has authorization and separately-running-agent gaps. it is not one-command voicemail delivery.",
  },
  {
    title: "mcp outward tools",
    description:
      "the mcp branch describes twelve read-only tools and three outward-facing tools over local stdio, not a hosted https api.",
  },
];

export function CapabilitiesPage() {
  return (
    <div>
      <MetaRow
        fields={[
          { label: "document", value: "capabilities" },
          { label: "parent", value: "features" },
          { label: "issue", value: "001" },
          { label: "status", value: "implementation-led" },
        ]}
      />

      <BriefNote>
        capabilities are grouped by setup, inbound work, and outward action. each stage has different
        dependencies and different proof requirements.
      </BriefNote>

      <StripLabel>capabilities</StripLabel>
      <BigHeading>
        receive first.
        <br />
        act second.
      </BigHeading>

      <DocBox label="number and host setup">
        <NumberedList items={setup} />
      </DocBox>

      <DocBox label="inbound and local context">
        <CellGrid items={inbound} columns={2} />
      </DocBox>

      <DocBox label="outbound and agent action">
        <NumberedList items={outbound} />
      </DocBox>

      <div className="flex flex-wrap gap-4 border-x border-b border-primary px-4 py-4">
        <Link
          to="/features"
          className="border-b border-primary text-[10px] uppercase tracking-[0.12em] text-primary"
        >
          back to features
        </Link>
        <Link
          to="/features/supports"
          className="border-b border-primary text-[10px] uppercase tracking-[0.12em] text-primary"
        >
          provider coverage
        </Link>
      </div>
    </div>
  );
}
