# architecture rules

- keep the public site as explanatory content without initializing provider clients or backend services; documented integrations are not live connections.
- use dedicated tanstack content routes and the shared ruled-document elements; each page owns its metadata while the shell owns navigation. CellGrid supports optional accessible card actions and explicit muted states; agent examples live in dedicated dialog components and remain explanatory, not live integrations.
- Keep coverage cards in a single section renderer driven by grouped content so implementation states remain consistent across surfaces.
- keep the branch map, roadmap, coverage, and execution notes in grouped footer navigation; the header stays focused on core product reading.
- Keep capability detail routes as siblings of the index leaf, with a shared overview component for the existing URL; this preserves independent page rendering and existing navigation.
- Keep the Cloud page directly addressable without inbound site links or navigation entries; it is a standalone preview of future offerings.
- Prebundle the shared dialog and slot packages at dev startup alongside the template's React dependencies to avoid lazy-route discovery changing optimizer generations in an open preview.