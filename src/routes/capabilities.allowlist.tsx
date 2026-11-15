import { createFileRoute } from "@tanstack/react-router";
import { BranchCapabilityPage, branchHead, type BranchCapability } from "@/components/prixy/branch-capability-page";

const page: BranchCapability = {
  "name": "allowlist",
  "branch": "allow",
  "status": "implemented",
  "summary": "closed-by-default sms catcher policy for heyphony, using explicit numbers and dial-code rules before inbox storage.",
  "items": [
    {
      "title": "explicit numbers",
      "description": "allow specific sender numbers rather than treating every incoming sender as trusted."
    },
    {
      "title": "country rules",
      "description": "use a home country or selected countries as additional policy choices."
    },
    {
      "title": "closed by default",
      "description": "senders outside the configured policy are refused."
    },
    {
      "title": "refusal records",
      "description": "record refusal metadata separately and acknowledge delivery to avoid repeated carrier retries."
    }
  ],
  "boundary": "enforcement covers the sms catcher, not every communication channel. +1 is treated as nanp, not us-only. an allow decision trusts the carrier-reported sender; it is not cryptographic identity proof."
};

export const Route = createFileRoute("/capabilities/allowlist")({
  head: () => branchHead(page),
  component: CapabilityDetail,
});

function CapabilityDetail() { return <BranchCapabilityPage page={page} />; }
