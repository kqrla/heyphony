import { BigHeading, BriefNote, CellGrid, DocBox, MetaRow, StripLabel } from "@/components/prixy/document-parts";

type CapabilityItem = { title: string; description: string; marker?: string };
export type BranchCapability = {
  name: string;
  branch: string;
  status: string;
  summary: string;
  items: CapabilityItem[];
  boundary: string;
};

export function branchHead(page: BranchCapability) {
  const title = `${page.name} | heyphony capabilities`;
  return { meta: [
    { title },
    { name: "description", content: page.summary },
    { property: "og:title", content: title },
    { property: "og:description", content: page.summary },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary" },
  ] };
}

export function BranchCapabilityPage({ page }: { page: BranchCapability }) {
  return <div>
    <MetaRow fields={[{ label: "document", value: page.name }, { label: "branch", value: page.branch }, { label: "status", value: page.status }]} />
    <StripLabel>heyphony / capabilities</StripLabel>
    <div className="break-words [&_h1]:text-5xl sm:[&_h1]:text-7xl"><BigHeading>{page.name}</BigHeading></div>
    <BriefNote>{page.summary}</BriefNote>
    <StripLabel>capability sheet</StripLabel>
    <CellGrid items={page.items} columns={2} />
    <DocBox label="boundaries"><p className="text-sm leading-relaxed text-foreground">{page.boundary}</p></DocBox>
  </div>;
}