import { createFileRoute, Link } from "@tanstack/react-router";
import { Pause } from "lucide-react";
import type { ReactNode } from "react";
import {
  BigHeading,
  BriefNote,
  MetaRow,
  StripLabel,
} from "../components/prixy/document-parts";

export const Route = createFileRoute("/coverage")({
  head: () => ({
    meta: [
      { title: "coverage | the honest state of heyphony" },
      {
        name: "description",
        content:
          "what heyphony implements on main and named branches, what has only local proof, and what remains designed.",
      },
      { property: "og:title", content: "coverage | the honest state of heyphony" },
      {
        property: "og:description",
        content: "implemented code, local proofs, unverified carriers, and designed branches listed separately.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CoveragePage,
});

type CoverageItem = {
  name: string;
  status: string;
  note?: ReactNode;
};

function CoverageCard({ item }: { item: CoverageItem }) {
  const shipped = !/^(planned|not built|designed|presumed|needs a probe)/.test(item.status);
  return (
    <div
      className={`border border-primary p-3 ${
        shipped ? "text-foreground" : "bg-secondary/40 text-muted-foreground"
      }`}
    >
      <div
        className={`mb-2 flex items-center gap-2 text-[10px] ${
          shipped ? "text-primary" : "text-muted-foreground"
        }`}
      >
        {!shipped && <Pause size={12} aria-hidden="true" />}
        {item.status}
      </div>
      <h3 className={`text-sm font-semibold ${item.note ? "mb-2" : ""}`}>{item.name}</h3>
      {item.note && (
        <p className="text-xs leading-relaxed text-muted-foreground">{item.note}</p>
      )}
    </div>
  );
}

function CoverageSection({
  id,
  title,
  items,
  columns = 3,
}: {
  id: string;
  title: string;
  items: CoverageItem[];
  columns?: 2 | 3;
}) {
  return (
    <section aria-labelledby={id} className="border-x border-b border-primary">
      <h2 id={id} className="border-b border-primary px-4 py-3 text-lg font-semibold text-primary">
        {title}
      </h2>
      <div className={`grid gap-3 p-4 sm:grid-cols-2 ${columns === 3 ? "lg:grid-cols-3" : ""}`}>
        {items.map((item) => (
          <CoverageCard key={item.name} item={item} />
        ))}
      </div>
    </section>
  );
}

const sections: { id: string; title: string; columns?: 2 | 3; items: CoverageItem[] }[] = [
  {
    id: "main-baseline",
    title: "main / baseline",
    items: [
      { name: "sms catcher", status: "implemented", note: "json, form, and query-string intake with provider-specific normalization. optional token authentication must be configured by the operator." },
      { name: "local inbox", status: "implemented", note: "jsonl append, provider-id deduplication, raw payload retention, and separate read marks." },
      { name: "threads and local browser", status: "implemented", note: "messages, missed calls, voicemail, email import, and draft replies on a loopback-only launcher." },
      { name: "call history", status: "implemented", note: "read-only access to linphone sqlite history." },
      { name: "carrier email import", status: "implemented", note: "message parsing and attachment import for supported carrier-email routes." },
      { name: "agent-friendly setup", status: "implemented", note: "noninteractive questions and options are returned as structured data." },
    ],
  },
  {
    id: "outbound",
    title: "outbound communication",
    items: [
      { name: "voip.ms sms", status: "implemented, not carrier-verified", note: "wired single-recipient http adapter behind explicit send gates." },
      { name: "flowroute sms", status: "implemented, not carrier-verified", note: "wired single-recipient http adapter behind explicit send gates." },
      { name: "signalwire sms", status: "implemented, not carrier-verified", note: "wired single-recipient http adapter behind explicit send gates." },
      { name: "anveo purchasing", status: "designed" },
      { name: "autonomous voicemail", status: "needs a probe first" },
      { name: "campaigns and schedules", status: "not built" },
    ],
  },
  {
    id: "mcp",
    title: "mcp / integrated branch",
    items: [
      { name: "mcp server", status: "implemented on mcp", note: "fifteen local stdio tools: twelve read-only and three outward-facing." },
      { name: "javascript sdk", status: "implemented on mcp", note: "a local integration surface, not a hosted api." },
      { name: "live voice + text", status: "implemented on mcp", note: "concurrent sip and http events in one sequenced in-memory timeline." },
      { name: "allow + lookup", status: "integrated on mcp", note: "sender policy and offline classification brought into the broader tree." },
      { name: "callheavy port", status: "implemented on mcp", note: "calling code is ported into the branch even though the branch history does not call it merged." },
      { name: "public mcp endpoint", status: "not built" },
    ],
  },
  {
    id: "policy-lookup",
    title: "policy and lookup branches",
    items: [
      { name: "sender allow policy", status: "implemented on allow", note: "explicit numbers and country policy, closed by default, with persisted refusals." },
      { name: "offline number classification", status: "implemented on lookup", note: "numbering-plan and nanp geography metadata; nanp line type intentionally remains unknown." },
      { name: "handles and email analysis", status: "implemented on lookup", note: "offline classifiers rather than a promise of live identity verification." },
      { name: "carrier-thread groups", status: "implemented on lookup", note: "the group represents the carrier's thread." },
      { name: "live carrier portability lookup", status: "not built" },
      { name: "cryptographic sender authentication", status: "not built" },
    ],
  },
  {
    id: "calling-devices",
    title: "calling and devices",
    items: [
      { name: "baresip task control", status: "implemented on callheavy", note: "loopback socket control for outbound tasks and call lifecycle." },
      { name: "local audio pump", status: "local proof on callheavy", note: "a documented pulseaudio loopback proof, not universal carrier media verification." },
      { name: "optional call-e rail", status: "implemented on callheavy", note: "an opt-in hosted rail rather than the default path." },
      { name: "android adb controls", status: "experimental on mobile", note: "four device-control verbs; no shipped android phone app." },
      { name: "ios mirroring", status: "experimental on mobile", note: "screen access only, without equivalent automation claims." },
      { name: "real mobile registration and calls", status: "needs a probe first" },
    ],
  },
  {
    id: "clawtel",
    title: "working through clawtel",
    items: [
      { name: "meetings", status: "working through clawtel", note: "meeting delivery is available through clawtel, rather than the standalone heyphony branch." },
      { name: "omni", status: "working through clawtel", note: "omnichannel communication is available through clawtel, rather than the standalone heyphony branch." },
    ],
    columns: 2,
  },
  {
    id: "designed",
    title: "still ahead",
    items: [
      { name: "hosted heyphony service", status: "planned" },
      { name: "one-command voicemail delivery", status: "planned" },
      { name: "automatic forwarding configuration", status: "designed" },
    ],
  },
];

function CoveragePage(): ReactNode {
  return (
    <div>
      <MetaRow
        fields={[
          { label: "document", value: "coverage" },
          { label: "parent", value: "behind heyphony" },
          { label: "status", value: "honest state" },
          { label: "source", value: "ten branches" },
        ]}
      />
      <BriefNote>
        what the repository implements today, what has only local proof, and what remains ahead.
        provider verification is not inferred from the presence of an adapter.
      </BriefNote>

      <StripLabel>coverage</StripLabel>
      <BigHeading>
        the honest
        <br />
        state.
      </BigHeading>

      {sections.map((section) => (
        <CoverageSection
          key={section.id}
          id={section.id}
          title={section.title}
          items={section.items}
          columns={section.columns ?? 3}
        />
      ))}

      <div className="flex flex-wrap gap-4 border-x border-b border-primary px-4 py-4">
        <Link
          to="/branches"
          className="border-b border-primary text-[10px] uppercase tracking-[0.12em] text-primary"
        >
          branch map
        </Link>
        <Link
          to="/how-it-runs"
          className="border-b border-primary text-[10px] uppercase tracking-[0.12em] text-primary"
        >
          how it runs
        </Link>
      </div>
    </div>
  );
}
