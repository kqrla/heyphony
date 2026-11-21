import { Link, Outlet, useRouterState } from "@tanstack/react-router";

/*
  the shell is a document wrapper: a sticky metadata header, a link row, and a
  footer plate. the "doc" cell in the header echoes the current route so the page
  always reads like a numbered sheet inside one manual.
*/
const primaryLinks = [
  { to: "/", label: "index" },
  { to: "/purpose", label: "purpose" },
  { to: "/problem", label: "problem" },
  { to: "/philosophy", label: "philosophy" },
  { to: "/about", label: "about" },
  { to: "/features", label: "features" },
  { to: "/features/capabilities", label: "capabilities" },
  { to: "/features/supports", label: "supports" },
] as const;

// secondary reading lives in the footer so the header stays focused on the product.
const footerLinkGroups = [
  {
    label: "explore",
    links: [
      { to: "/purpose", label: "purpose" },
      { to: "/problem", label: "problem" },
      { to: "/philosophy", label: "philosophy" },
      { to: "/about", label: "about" },
    ],
  },
  {
    label: "product",
    links: [
      { to: "/features", label: "features" },
      { to: "/features/capabilities", label: "capabilities" },
      { to: "/features/supports", label: "supports" },
    ],
  },
  {
    label: "behind heyphony",
    links: [
      { to: "/how-it-runs", label: "how it runs" },
      { to: "/branches", label: "branch map" },
      { to: "/roadmap", label: "roadmap" },
      { to: "/coverage", label: "coverage" },
    ],
  },
] as const;

export function SiteShell() {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const currentDocument =
    primaryLinks.find((link) => link.to === pathname)?.label ??
    footerLinkGroups.map((group) => group.links.find((link) => link.to === pathname)).find(
      (link) => link !== undefined,
    )?.label ?? pathname.replace("/", "");

  return (
    <div className="flex min-h-full flex-col">
      <div className="pointer-events-none fixed top-0 left-0 z-20 hidden h-full w-8 items-center justify-center lg:flex">
        <span
          className="font-mono text-[9px] whitespace-nowrap text-primary uppercase tracking-[0.25em] opacity-40"
          style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
        >
          heyphony / self-hosted agent telephony / call, text, voicemail
        </span>
      </div>

      <header className="sticky top-0 z-30 bg-background">
        <div className="flex border border-primary">
          <div className="flex items-center border-r border-primary px-4 py-2">
            <Link
              to="/"
              className="font-display text-xl leading-none font-black tracking-tight text-primary uppercase"
            >
              heyphony
            </Link>
          </div>
          <div className="hidden flex-1 flex-col justify-center border-r border-primary px-3 py-1.5 sm:flex">
            <div className="text-[9px] uppercase tracking-[0.18em] text-primary opacity-55">type</div>
            <div className="text-xs text-foreground">agent phone toolkit</div>
          </div>
          <div className="hidden flex-col justify-center border-r border-primary px-3 py-1.5 md:flex">
            <div className="text-[9px] uppercase tracking-[0.18em] text-primary opacity-55">status</div>
            <div className="text-xs text-foreground">available in alpha</div>
          </div>
          <div className="hidden flex-col justify-center px-3 py-1.5 md:flex">
            <div className="text-[9px] uppercase tracking-[0.18em] text-primary opacity-55">doc</div>
            <div className="text-xs text-foreground">{currentDocument || "index"}</div>
          </div>
        </div>

        <div className="overflow-x-auto border-x border-b border-primary px-3 py-2">
          <nav className="flex items-center gap-4 whitespace-nowrap" aria-label="primary navigation">
            {primaryLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                activeOptions={{ exact: true }}
                className="text-xs text-muted-foreground transition-colors hover:text-foreground"
                activeProps={{
                  className: "text-xs text-primary font-semibold underline underline-offset-2",
                }}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <main className="flex-1 lg:pl-8">
        <div className="mx-auto max-w-5xl">
          <Outlet />
        </div>
      </main>

      <footer className="mt-12 lg:pl-8">
        <div className="mx-auto max-w-5xl">
          <div className="border border-t-2 border-primary">
            <div className="border-b border-primary px-4 py-1.5">
              <span className="text-[10px] text-primary opacity-60">
                source and documentation
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-[1.2fr_2fr]">
              <div className="border-b border-primary px-4 py-5 md:border-b-0 md:border-r">
                <Link to="/" className="font-display text-3xl font-black text-primary">heyphony</Link>
                <div className="mt-1 text-xs text-muted-foreground">a phone number for your ai agent</div>
                <p className="mt-3 max-w-xs text-xs leading-relaxed text-muted-foreground">
                  an explanatory site for the self-hosted toolkit. no carrier, phone number, or
                  provider account is connected here.
                </p>
                <a
                  href="https://github.com/tinkrland/heyphony"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block border-b border-primary text-[10px] uppercase tracking-[0.12em] text-primary"
                >
                  read the source on github
                </a>
              </div>
              <nav aria-label="footer navigation" className="grid grid-cols-2 sm:grid-cols-3">
                {footerLinkGroups.map((group) => (
                  <div key={group.label} className="min-w-0 px-4 py-5">
                    <h2 className="mb-2 text-[10px] text-primary opacity-60">{group.label}</h2>
                    <ul className="space-y-1">
                      {group.links.map((link) => (
                        <li key={link.to}>
                          <Link
                            to={link.to}
                            activeOptions={{ exact: true }}
                            className="text-xs text-foreground underline-offset-4 hover:text-primary hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
                            activeProps={{ "aria-current": "page", className: "text-xs text-primary underline underline-offset-4" }}
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </nav>
            </div>
            <div className="flex flex-wrap justify-between gap-2 border-t border-primary px-4 py-2 text-[10px] text-muted-foreground">
              <span>ordinary telephony, adapted for agents.</span>
              <span>one number, one agent, one message at a time.</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
