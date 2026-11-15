import { createFileRoute } from "@tanstack/react-router";
import { BranchCapabilityPage, branchHead, type BranchCapability } from "@/components/prixy/branch-capability-page";

const page: BranchCapability = {
  "name": "cloudmobile",
  "branch": "mobile",
  "status": "experimental",
  "summary": "device-control plans, mirroring, and host-bridge experiments for heyphony’s mobile direction.",
  "items": [
    {
      "title": "android controls",
      "description": "plan app opening, accessibility-targeted taps, typing, and screen capture through adb."
    },
    {
      "title": "ios mirroring",
      "description": "observe the screen without claiming equivalent ios automation."
    },
    {
      "title": "ring observation",
      "description": "explore device ring events as input to a host workflow."
    },
    {
      "title": "host bridge",
      "description": "experiment with bridging a mobile device and a persistent host."
    }
  ],
  "boundary": "command plans are not proof of execution on a real phone. this is not a shipped cloud-phone fleet or mobile app; real registration and calls remain unproven. guests cannot supply genuine hardware attestation, and camera verification requires a person."
};

export const Route = createFileRoute("/capabilities/cloudmobile")({
  head: () => branchHead(page),
  component: CapabilityDetail,
});

function CapabilityDetail() { return <BranchCapabilityPage page={page} />; }
