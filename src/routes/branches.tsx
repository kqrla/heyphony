import { createFileRoute } from "@tanstack/react-router";
import { GitBranch, Inbox, ListFilter, Phone, Radio, Search, Server, ShieldCheck, Smartphone, Workflow } from "lucide-react";
import {
  BigHeading,
  BriefNote,
  CellGrid,
  MetaRow,
  StripLabel,
} from "@/components/prixy/document-parts";

export const Route = createFileRoute("/branches")({
  head: () => ({
    meta: [
      { title: "branch map | heyphony" },
      {
        name: "description",
        content:
          "a guide to heyphony's main, mcp, policy, lookup, calling, setup, mobile, forwarding, omni, and meetings branches.",
      },
      { property: "og:title", content: "branch map | heyphony" },
      {
        property: "og:description",
        content: "what each heyphony branch adds, and which ideas remain designs rather than working deliveries.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: BranchesPage,
});

function BranchesPage() {
  return (
    <div>
      <MetaRow
        fields={[
          { label: "doc", value: "branch map" },
          { label: "issue", value: "01" },
          { label: "status", value: "ten branches reviewed" },
        ]}
      />
      <BigHeading>one toolkit, several experiments</BigHeading>

      <BriefNote label="brief">
        main is the baseline. mcp is the broadest integrated implementation. the other branches
        explore specific directions and should not be read as one uniformly shipped product.
      </BriefNote>

      <StripLabel>foundation</StripLabel>
      <CellGrid
        columns={3}
        items={[
          {
            title: "main",
            description: "number setup, sms catcher, local inbox, browser views, call history, voicemail import, gated outbound adapters, and npm packaging.",
            icon: <Inbox size={18} />,
            marker: "baseline",
          },
          {
            title: "mcp",
            description: "fifteen local stdio tools, a javascript sdk, allow and lookup integration, ported callheavy code, and a live voice-and-text timeline.",
            icon: <Workflow size={18} />,
            marker: "broadest integrated tree",
          },
          {
            title: "setup",
            description: "deployment modes for a local host, dedicated machine, container, vm, or ephemeral guest; documentation rather than an infrastructure provisioner.",
            icon: <Server size={18} />,
            marker: "deployment guide",
          },
        ]}
      />

      <StripLabel>policy and routing</StripLabel>
      <CellGrid
        columns={3}
        items={[
          {
            title: "allow",
            description: "closed-by-default sender policy using explicit numbers, a home country, or selected countries, with refusal records.",
            icon: <ShieldCheck size={18} />,
            marker: "implemented branch",
          },
          {
            title: "lookup",
            description: "offline numbering-plan classification, nanp geography, handle and email analysis, and carrier-thread groups; not a live carrier lookup.",
            icon: <Search size={18} />,
            marker: "implemented branch",
          },
          {
            title: "new",
            description: "a forwarding model that keeps carrier call forwarding separate from text routing; planning and modeling rather than a proven carrier configuration service.",
            icon: <GitBranch size={18} />,
            marker: "forwarding model",
          },
        ]}
      />

      <StripLabel>voice and devices</StripLabel>
      <CellGrid
        columns={3}
        items={[
          {
            title: "callheavy",
            description: "outbound tasks, baresip socket control, local audio pumping, and an optional hosted call-e rail, with a documented local loopback audio proof.",
            icon: <Phone size={18} />,
            marker: "implemented branch / local proof",
          },
          {
            title: "mobile",
            description: "android adb controls, ios screen-only mirroring, ring observation, and host-bridge experiments. real registration and calls remain unproven.",
            icon: <Smartphone size={18} />,
            marker: "experimental",
          },
          {
            title: "live voice + text",
            description: "inside mcp: concurrent sip events and http messages brought into one sequenced in-memory timeline for an agent session.",
            icon: <Radio size={18} />,
            marker: "available on mcp",
          },
        ]}
      />

      <StripLabel>designed, not delivered</StripLabel>
      <CellGrid
        columns={3}
        items={[
          {
            title: "omni",
            description: "nine non-telephony lanes with shared envelopes and gates. intake and normalization code exists, but every lane is marked designed.",
            icon: <ListFilter size={18} />,
            marker: "designed",
            muted: true,
          },
          {
            title: "meetings",
            description: "zoom, google meet, and teams join plans and token work. the branch explicitly says nothing joins a meeting yet.",
            icon: <Phone size={18} />,
            marker: "designed",
            muted: true,
          },
          {
            title: "hosted service",
            description: "a possible future convenience, not the current product. today the operator supplies the number, accounts, networking, and host.",
            icon: <Server size={18} />,
            marker: "planned",
            muted: true,
          },
        ]}
      />
    </div>
  );
}
