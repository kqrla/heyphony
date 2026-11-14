import { createFileRoute } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { Database, Phone, Send, Server, Terminal, Webhook } from "lucide-react";
import { BigHeading, BriefNote, MetaRow, StripLabel } from "@/components/prixy/document-parts";

export const Route = createFileRoute("/how-it-runs")({
  head: () => ({
    meta: [
      { title: "how it runs | heyphony" },
      { name: "description", content: "the carrier, sip, webhook, local storage, cli, browser, and mcp layers behind heyphony." },
      { property: "og:title", content: "how it runs | heyphony" },
      { property: "og:description", content: "a look at heyphony's persistent host, local communication state, and outbound boundaries." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HowItRunsPage,
});

function ServiceCard({ name, status, muted = false, children }: {
  name: string;
  status: string;
  muted?: boolean;
  children: ReactNode;
}) {
  return (
    <div className={`border border-primary p-3 ${muted ? "bg-secondary/40 text-muted-foreground" : "text-foreground"}`}>
      <div className={`mb-2 text-[10px] ${muted ? "text-muted-foreground" : "text-primary"}`}>{status}</div>
      <h3 className="mb-2 text-sm font-semibold">{name}</h3>
      <p className="text-xs leading-relaxed text-muted-foreground">{children}</p>
    </div>
  );
}

function HowItRunsPage() {
  return (
    <article className="[&_h1]:text-5xl [&_h1]:normal-case [&_h1]:tracking-normal sm:[&_h1]:text-7xl [&_span]:normal-case [&_span]:tracking-normal">
      <MetaRow fields={[
        { label: "document", value: "how it runs" },
        { label: "type", value: "system notes" },
        { label: "issue", value: "008" },
        { label: "status", value: "self-hosted stack" },
      ]} />
      <BriefNote>
        the moving parts behind one agent-readable number. this public site does not run a sip client,
        receive webhooks, or connect to a carrier.
      </BriefNote>
      <StripLabel>carrier / host / agent</StripLabel>
      <BigHeading>how it runs</BigHeading>

      <section aria-labelledby="number-voice" className="border-x border-b border-primary">
        <div className="flex items-center gap-3 border-b border-primary px-4 py-3 text-primary">
          <Phone size={18} aria-hidden="true" />
          <h2 id="number-voice" className="text-lg font-semibold">number and voice</h2>
        </div>
        <div className="grid gap-3 p-4 sm:grid-cols-2 lg:grid-cols-3">
          <ServiceCard name="carrier account + did" status="operator supplied">
            the phone number, carrier billing, voice route, and sms service remain in an account controlled by the operator.
          </ServiceCard>
          <ServiceCard name="linphone / main" status="baseline implementation">
            main writes sip configuration, protects it with file mode 0600, and reads linphone's sqlite call history in read-only mode.
          </ServiceCard>
          <ServiceCard name="baresip / calling branches" status="later implementation">
            callheavy and mcp use baresip socket control for outbound tasks and audio work; this is a separate path from main's linphone code.
          </ServiceCard>
        </div>
      </section>

      <section aria-labelledby="text-intake" className="border-x border-b border-primary">
        <div className="flex items-center gap-3 border-b border-primary px-4 py-3 text-primary">
          <Webhook size={18} aria-hidden="true" />
          <h2 id="text-intake" className="text-lg font-semibold">text and voicemail intake</h2>
        </div>
        <div className="grid gap-3 p-4 sm:grid-cols-2 lg:grid-cols-3">
          <ServiceCard name="sms catcher" status="0.0.0.0:8099">
            accepts json, form, and query deliveries on provider-specific routes. the optional x-heyphony-token check permits requests when no token is configured.
          </ServiceCard>
          <ServiceCard name="carrier email" status="alternative intake">
            imports supported message and voicemail emails with attachments. this can avoid one webhook shape, but still depends on the carrier's actual delivery behavior.
          </ServiceCard>
          <ServiceCard name="public reachability" status="operator supplied">
            webhooks need an awake reachable host, tls endpoint, or tunnel. a container by itself does not make a sleeping laptop reachable.
          </ServiceCard>
        </div>
      </section>

      <section aria-labelledby="local-state" className="border-x border-b border-primary">
        <div className="flex items-center gap-3 border-b border-primary px-4 py-3 text-primary">
          <Database size={18} aria-hidden="true" />
          <h2 id="local-state" className="text-lg font-semibold">local state</h2>
        </div>
        <div className="grid gap-3 p-4 sm:grid-cols-2 lg:grid-cols-3">
          <ServiceCard name="jsonl inbox" status="main implementation">
            stores normalized messages and raw payloads, deduplicates provider ids, and defaults to the user's local telephony data directory with an xdg override.
          </ServiceCard>
          <ServiceCard name="views and sidecars" status="main implementation">
            read marks, drafts, sent records, groups, policy decisions, and imported files stay distinct instead of being inferred from incoming payloads.
          </ServiceCard>
          <ServiceCard name="operator data policy" status="required">
            message contents are not magically encrypted by the toolkit. choose appropriate permissions, retention, deletion, and backup practices for the host.
          </ServiceCard>
        </div>
      </section>

      <section aria-labelledby="interfaces" className="border-x border-b border-primary">
        <div className="flex items-center gap-3 border-b border-primary px-4 py-3 text-primary">
          <Terminal size={18} aria-hidden="true" />
          <h2 id="interfaces" className="text-lg font-semibold">agent and human interfaces</h2>
        </div>
        <div className="grid gap-3 p-4 sm:grid-cols-2 lg:grid-cols-3">
          <ServiceCard name="command line" status="cli-first">
            noninteractive setup returns missing questions and options as structured data rather than leaving an agent stuck at a prompt.
          </ServiceCard>
          <ServiceCard name="local browser launcher" status="127.0.0.1:8790">
            provides threads, calls, voicemail, email import, and draft replies. it has no authentication beyond its bind address and should stay local.
          </ServiceCard>
          <ServiceCard name="mcp + javascript sdk" status="mcp branch / stdio">
            exposes fifteen local tools—twelve read-only and three outward-facing—plus an sdk. no hosted https api is implied.
          </ServiceCard>
        </div>
      </section>

      <section aria-labelledby="outbound" className="border-x border-b border-primary">
        <div className="flex items-center gap-3 border-b border-primary px-4 py-3 text-primary">
          <Send size={18} aria-hidden="true" />
          <h2 id="outbound" className="text-lg font-semibold">outbound action</h2>
        </div>
        <div className="grid gap-3 p-4 sm:grid-cols-2 lg:grid-cols-3">
          <ServiceCard name="gated sms" status="main implementation">
            voip.ms, flowroute, and signalwire adapters require both heyphony_send=allowed and the command's explicit send authorization.
          </ServiceCard>
          <ServiceCard name="call tasks and audio" status="callheavy + mcp">
            outbound tasks, baresip control, and local audio pumping exist, with local loopback proof rather than a blanket live-call guarantee.
          </ServiceCard>
          <ServiceCard name="autonomous voicemail" status="incomplete" muted>
            generated worker code exists, but authorization and the separately running speaking agent remain unresolved in the baseline.
          </ServiceCard>
        </div>
      </section>

      <section aria-labelledby="operations" className="border-x border-b border-primary">
        <div className="flex items-center gap-3 border-b border-primary px-4 py-3 text-primary">
          <Server size={18} aria-hidden="true" />
          <h2 id="operations" className="text-lg font-semibold">operating requirements</h2>
        </div>
        <div className="grid gap-3 p-4 sm:grid-cols-2 lg:grid-cols-3">
          <ServiceCard name="persistent machine" status="required for live service">
            keep registration, credentials, listeners, and storage on infrastructure that remains awake between agent invocations.
          </ServiceCard>
          <ServiceCard name="real delivery proof" status="required per provider">
            run status or doctor, then prove the route using the actual carrier account. repository verification flags are currently false.
          </ServiceCard>
          <ServiceCard name="narrow authority" status="design rule">
            one number, one agent, one message at a time. no campaign queues, schedules, bulk retries, or quiet-hours engine are part of the baseline.
          </ServiceCard>
        </div>
      </section>
    </article>
  );
}
