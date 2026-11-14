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

export const Route = createFileRoute("/features/supports")({
  head: () => ({
    meta: [
      { title: "supports | heyphony provider and host coverage" },
      {
        name: "description",
        content:
          "heyphony's modeled telephone providers, outbound sms adapters, host requirements, and experimental platform branches.",
      },
      { property: "og:title", content: "supports | heyphony provider and host coverage" },
      {
        property: "og:description",
        content: "provider coverage is uneven by design: voice, sms intake, and outbound support are listed separately.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SupportsPage,
});

const providers = [
  {
    marker: "sms intake + outbound adapter",
    title: "voip.ms",
    description: "voice registration and sms model, with one of main's three wired outbound http adapters. live carrier verification is still required.",
  },
  {
    marker: "sms intake + outbound adapter",
    title: "flowroute",
    description: "voice and sms provider model with a wired outbound adapter. account credentials and a real delivery test remain operator responsibilities.",
  },
  {
    marker: "sms intake + outbound adapter",
    title: "signalwire",
    description: "voice and sms provider model with a wired outbound adapter using the provider's space, project, and token configuration.",
  },
  {
    marker: "provisioning preparation",
    title: "anveo",
    description: "stock and area lookup plus prepared order requests. cli purchasing is deliberately parked rather than presented as working provisioning.",
  },
  {
    marker: "provider model",
    title: "questblue",
    description: "trunk-routing coverage rather than a per-number softphone login. the voice topology differs from registration-based providers.",
  },
  {
    marker: "provider model",
    title: "bulkvs",
    description: "modeled telephone-provider coverage. check the specific voice and sms route before assuming the same setup as another carrier.",
  },
  {
    marker: "xmpp intake route",
    title: "jmp.chat",
    description: "a distinct provider path using xmpp rather than the same webhook or carrier-email intake shape as the other models.",
  },
  {
    marker: "voice-only model",
    title: "voyced",
    description: "listed for voice coverage. no baseline outbound sms adapter is claimed for this provider.",
  },
  {
    marker: "voice-only model",
    title: "voxacall",
    description: "listed for voice coverage. no baseline outbound sms adapter is claimed for this provider.",
  },
  {
    marker: "voice-only model",
    title: "bitcall",
    description: "listed for voice coverage. no baseline outbound sms adapter is claimed for this provider.",
  },
];

const intakePaths = [
  {
    title: "json or form webhook",
    description: "the provider posts to the catcher's provider-specific route, where the payload is normalized and stored.",
  },
  {
    title: "query-string delivery",
    description: "providers that forward message details in a url can use the same intake boundary without pretending the payload is identical.",
  },
  {
    title: "carrier email",
    description: "message or voicemail email can be imported with its attachments, providing an alternative where the carrier supports it.",
  },
  {
    title: "xmpp route",
    description: "jmp.chat follows its own communications path rather than being forced into a webhook-only description.",
  },
];

const hostCoverage = [
  {
    title: "linux",
    description: "the clearest host path for persistent services and pulseaudio or pipewire audio experiments.",
  },
  {
    title: "macos",
    description: "documented host paths and blackhole installation for audio routing experiments.",
  },
  {
    title: "windows / wsl2",
    description: "available as the least-proven host route; windows audio experiments involve proprietary vb-cable.",
  },
  {
    title: "android / mobile branch",
    description: "four adb control verbs and ring experiments. this is not a shipped android phone app or a proven real-call flow.",
  },
  {
    title: "ios / mobile branch",
    description: "screen-access mirroring only. no equivalent ios automation or calling capability is claimed.",
  },
  {
    title: "mcp clients",
    description: "the mcp branch exposes local stdio tools and a javascript sdk. it is not a hosted internet api.",
  },
];

function SupportsPage() {
  return (
    <div>
      <MetaRow
        fields={[
          { label: "document", value: "supports" },
          { label: "parent", value: "features" },
          { label: "issue", value: "002" },
          { label: "status", value: "models + named adapters" },
        ]}
      />

      <BriefNote>
        provider coverage is not one checkbox. voice topology, sms intake, outbound adapters, and
        real-world verification are separate properties, and current provider prices are not quoted here.
      </BriefNote>

      <StripLabel>supports</StripLabel>
      <BigHeading>
        bring your
        <br />
        own carrier.
      </BigHeading>

      <DocBox label="telephone providers">
        <CellGrid items={providers} />
      </DocBox>

      <DocBox label="how texts arrive">
        <NumberedList items={intakePaths} />
      </DocBox>

      <DocBox label="hosts and agent interfaces">
        <CellGrid items={hostCoverage} columns={2} />
        <div className="mt-4 flex flex-wrap gap-2">
          <Tag>persistent host</Tag>
          <Tag>python 3</Tag>
          <Tag>npm wrapper</Tag>
          <Tag>sip client</Tag>
          <Tag>public inbound route</Tag>
        </div>
      </DocBox>

      <DocBox label="not baseline support" filled>
        <p className="text-sm leading-relaxed">
          zoom, google meet, teams, whatsapp, slack, discord, and streaming lanes belong to designed
          meeting or omni branches, not to main's working telephone inbox. mobile calling is also
          experimental rather than delivered.
        </p>
      </DocBox>

      <div className="flex flex-wrap gap-4 border-x border-b border-primary px-4 py-4">
        <Link
          to="/features"
          className="border-b border-primary text-[10px] uppercase tracking-[0.12em] text-primary"
        >
          back to features
        </Link>
        <Link
          to="/coverage"
          className="border-b border-primary text-[10px] uppercase tracking-[0.12em] text-primary"
        >
          implementation status
        </Link>
      </div>
    </div>
  );
}
