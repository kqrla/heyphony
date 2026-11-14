import { createFileRoute, Link } from "@tanstack/react-router";
import {
  BigHeading,
  BriefNote,
  CellGrid,
  DocBox,
  MetaRow,
  NumberedList,
  StripLabel,
  Tag,
} from "../components/prixy/document-parts";

export const Route = createFileRoute("/features/")({
  head: () => ({
    meta: [
      { title: "features | what heyphony does" },
      {
        name: "description",
        content:
          "heyphony's implemented inbox, call history, voicemail, local interfaces, outbound gates, and operational constraints.",
      },
      { property: "og:title", content: "features | what heyphony does" },
      {
        property: "og:description",
        content: "the baseline toolkit, its local architecture, and the boundaries around outbound communication.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: FeaturesPage,
});

const capabilities = [
  {
    marker: "01",
    title: "receive and normalize texts",
    description:
      "the catcher accepts json, form posts, and query-string deliveries, then adapts provider payloads into a common message shape.",
  },
  {
    marker: "02",
    title: "keep a local inbox",
    description:
      "append messages to jsonl, deduplicate provider ids, retain the raw payload, and track read state separately.",
  },
  {
    marker: "03",
    title: "read calls and voicemail",
    description:
      "inspect threads, missed calls, call history, voicemail, and imported carrier email through local views.",
  },
  {
    marker: "04",
    title: "work through cli or browser",
    description:
      "use agent-friendly commands and structured setup output, or open the local browser launcher for threads and drafts.",
  },
  {
    marker: "05",
    title: "send through explicit gates",
    description:
      "single-recipient sms adapters exist for voip.ms, flowroute, and signalwire, behind environment and send authorization checks.",
  },
  {
    marker: "06",
    title: "extend through mcp",
    description:
      "the mcp branch adds fifteen local tools, a javascript sdk, policy and lookup integration, calling code, and a live event timeline.",
  },
];

const stack = [
  {
    title: "carrier and number layer",
    description:
      "a provider-owned did, carrier account, sip credentials, and the provider's chosen sms delivery route.",
  },
  {
    title: "persistent host layer",
    description:
      "an awake machine holds the sip registration, credentials, catcher, and communication history instead of relying on an ephemeral agent run.",
  },
  {
    title: "intake and normalization",
    description:
      "provider-specific webhook or email input becomes a common message record while preserving the original delivery for inspection.",
  },
  {
    title: "local state",
    description:
      "jsonl messages, read marks, drafts, sent records, imported attachments, and read-only access to the sip client's call database.",
  },
  {
    title: "agent interfaces",
    description:
      "commands and structured output on main; a local stdio mcp server and javascript sdk on the mcp branch.",
  },
  {
    title: "outbound policy",
    description:
      "explicit send authorization on main, with closed-by-default sender policy on the allow branch and outbound calling experiments in callheavy.",
  },
];

const considerations = [
  {
    title: "provider verification",
    description:
      "provider models and adapters are implemented, but the repository marks provider verification false. real delivery still needs a live account test.",
  },
  {
    title: "webhook exposure",
    description:
      "main's optional catcher token permits requests when unset. use a strong token, tls termination, and appropriate network controls in deployment.",
  },
  {
    title: "local interface boundary",
    description:
      "the browser launcher defaults to loopback and has no authentication beyond its bind address. do not expose it as a public dashboard.",
  },
  {
    title: "otp limitations",
    description:
      "voip numbers can be rejected by verification-code services. an agent-controlled number does not guarantee otp delivery or device attestation.",
  },
  {
    title: "no campaign engine",
    description:
      "bulk lists, schedules, retry queues, and quiet-hours automation are outside the baseline scope. outbound gates are not compliance certification.",
  },
  {
    title: "sensitive local data",
    description:
      "messages and attachments are sensitive. operators must choose file permissions, retention, deletion, and backup policies for their own host.",
  },
];

function FeaturesPage() {
  return (
    <div>
      <MetaRow
        fields={[
          { label: "document", value: "features" },
          { label: "sections", value: "capabilities · stack · considerations" },
          { label: "issue", value: "001" },
          { label: "status", value: "main + named branches" },
        ]}
      />

      <BriefNote>
        this sheet separates the baseline toolkit from branch additions and operational duties. an
        adapter being present is not the same as a carrier delivery being verified.
      </BriefNote>

      <StripLabel>features</StripLabel>
      <BigHeading>
        give the agent
        <br />
        the thread.
        <br />
        gate the reply.
      </BigHeading>

      <DocBox label="capabilities">
        <CellGrid items={capabilities} />
        <div className="mt-4">
          <Link
            to="/features/capabilities"
            className="border-b border-primary text-[10px] uppercase tracking-[0.12em] text-primary"
          >
            full capability sheet
          </Link>
        </div>
      </DocBox>

      <DocBox label="stack">
        <NumberedList items={stack} />
        <div className="mt-4 flex flex-wrap gap-2">
          <Tag>sip</Tag>
          <Tag>webhooks</Tag>
          <Tag>jsonl</Tag>
          <Tag>cli</Tag>
          <Tag>mcp</Tag>
          <Tag>explicit outbound</Tag>
        </div>
      </DocBox>

      <DocBox label="considerations">
        <CellGrid items={considerations} columns={2} />
      </DocBox>

      <div className="flex flex-wrap gap-4 border-x border-b border-primary px-4 py-4">
        <Link
          to="/features/supports"
          className="border-b border-primary text-[10px] uppercase tracking-[0.12em] text-primary"
        >
          supported provider models
        </Link>
        <Link
          to="/coverage"
          className="border-b border-primary text-[10px] uppercase tracking-[0.12em] text-primary"
        >
          honest coverage
        </Link>
      </div>
    </div>
  );
}
