import { createFileRoute } from "@tanstack/react-router";
import { BranchCapabilityPage, branchHead, type BranchCapability } from "@/components/prixy/branch-capability-page";

const page: BranchCapability = {
  "name": "forwarding",
  "branch": "main / provider guides",
  "status": "provider-dependent",
  "summary": "carrier-side forwarding and fallback for heyphony, with voice and text delivery configured separately.",
  "items": [
    {
      "title": "voice forwarding",
      "description": "provider routes can send calls to sip while registered, with fallback to voicemail or another number where supported."
    },
    {
      "title": "text routing",
      "description": "carrier-side sms-to-email and voicemail-to-email can continue while the host sleeps, where the provider supports them."
    }
  ],
  "boundary": "forwarding depends on the carrier’s configuration and capabilities. it is not a verified standalone forwarding service. the shipping catcher normalizes and stores messages; automatic catcher-to-email forwarding is not implemented."
};

export const Route = createFileRoute("/capabilities/forwarding")({
  head: () => branchHead(page),
  component: CapabilityDetail,
});

function CapabilityDetail() { return <BranchCapabilityPage page={page} />; }
