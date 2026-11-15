import { createFileRoute } from "@tanstack/react-router";
import { BranchCapabilityPage, branchHead, type BranchCapability } from "@/components/prixy/branch-capability-page";

const page: BranchCapability = {
  "name": "lookup",
  "branch": "lookup",
  "status": "implemented",
  "summary": "offline number, handle, and email classification for heyphony communication context.",
  "items": [
    {
      "title": "numbering plans",
      "description": "classify numbers using offline numbering-plan metadata."
    },
    {
      "title": "nanp geography",
      "description": "identify north american numbering-plan geography; line type deliberately remains unknown."
    },
    {
      "title": "handles and email",
      "description": "analyze handles and email addresses locally without claiming verified identity."
    },
    {
      "title": "carrier-thread groups",
      "description": "represent the carrier’s existing thread rather than inventing a new delivery group."
    }
  ],
  "boundary": "offline classification does not establish the current carrier, portability state, line type, or ownership of a number."
};

export const Route = createFileRoute("/capabilities/lookup")({
  head: () => branchHead(page),
  component: CapabilityDetail,
});

function CapabilityDetail() { return <BranchCapabilityPage page={page} />; }
