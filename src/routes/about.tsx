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

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "about heyphony | a jerryrigged phone toolkit" },
      {
        name: "description",
        content:
          "heyphony is a source-available, self-hosted toolkit that gives an ai agent an ordinary phone number and local communications tools.",
      },
      { property: "og:title", content: "about heyphony | a jerryrigged phone toolkit" },
      {
        property: "og:description",
        content: "self-hosted, cli-first, carrier-connected, and honest about what is still experimental.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

const positioning = [
  {
    marker: "01",
    title: "self-hosted, not rented",
    description:
      "the toolkit and its communication history live with your host. your carrier account remains a separate, explicit dependency.",
  },
  {
    marker: "02",
    title: "cli-first, agent-readable",
    description:
      "noninteractive setup and structured output let an agent discover missing information instead of stalling on a terminal prompt.",
  },
  {
    marker: "03",
    title: "source-available, not mislabeled",
    description:
      "the repository describes individual versions converting to mit after two years. current source availability is not a blanket open-source claim.",
  },
];

function AboutPage() {
  return (
    <div>
      <MetaRow
        fields={[
          { label: "document", value: "about" },
          { label: "type", value: "product note" },
          { label: "issue", value: "002" },
          { label: "status", value: "main + mcp" },
        ]}
      />

      <BriefNote>
        about sheet. what kind of software heyphony is, and how the repository's branches fit together.
      </BriefNote>

      <StripLabel>about</StripLabel>
      <BigHeading>
        jerryrigged
        <br />
        on purpose.
      </BigHeading>

      <DocBox label="origin">
        <Prose>
          <p>
            heyphony started from a concrete question: what does it take to give an ai agent a phone
            number of its own without inventing a parallel telephone system?
          </p>
          <p>
            the answer is a practical adapter around carriers, sip clients, webhooks, local files,
            and agent tools. the main branch holds the baseline inbox and management workflow. the
            mcp branch is the broadest integrated tree, adding structured tools, lookup and allow
            policy, calling code, and a live voice-and-text timeline.
          </p>
          <PullQuote>ordinary telephony, made readable to an agent.</PullQuote>
          <p>
            other branches explore policy, lookup, calling, deployment, forwarding, devices,
            omnichannel intake, and meetings. they are not all equally complete, and this site labels
            them accordingly. meetings and omni already work through clawtel, separately from the
            standalone heyphony branch code.
          </p>
        </Prose>
      </DocBox>

      <DocBox label="positioning">
        <CellGrid items={positioning} />
      </DocBox>
    </div>
  );
}
