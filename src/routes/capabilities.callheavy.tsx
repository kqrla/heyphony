import { createFileRoute } from "@tanstack/react-router";
import { BranchCapabilityPage, branchHead, type BranchCapability } from "@/components/prixy/branch-capability-page";

const page: BranchCapability = {
  "name": "callheavy",
  "branch": "callheavy",
  "status": "implemented / local proof",
  "summary": "outbound call tasks, baresip control, and local audio work for heyphony.",
  "items": [
    {
      "title": "call tasks",
      "description": "define goals, success criteria, and structured results. dialing requires explicit authorization and run approval; otherwise the command returns a plan."
    },
    {
      "title": "baresip control",
      "description": "use loopback socket control for the sip calling path."
    },
    {
      "title": "local audio pump",
      "description": "feed audio through the local call workflow, with a documented pulseaudio loopback proof."
    },
    {
      "title": "optional call-e rail",
      "description": "choose the hosted call-e path with the owner’s credentials. the command requires an explicit rail choice."
    }
  ],
  "boundary": "local loopback audio proves the local path, not universal carrier delivery. the own-sip rail does not ship transcription or autonomous business-result extraction; supply a transcript or use the hosted rail. sip-to-livekit bridging is not shipped."
};

export const Route = createFileRoute("/capabilities/callheavy")({
  head: () => branchHead(page),
  component: CapabilityDetail,
});

function CapabilityDetail() { return <BranchCapabilityPage page={page} />; }
