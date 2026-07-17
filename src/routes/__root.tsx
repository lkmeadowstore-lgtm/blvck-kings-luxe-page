import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl text-primary">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center bg-gold-gradient px-6 py-3 text-xs uppercase tracking-[0.3em] text-primary-foreground"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">This page didn't load</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="bg-gold-gradient px-6 py-3 text-xs uppercase tracking-[0.3em] text-primary-foreground"
          >
            Try again
          </button>
          <a
            href="/"
            className="border border-border px-6 py-3 text-xs uppercase tracking-[0.3em] text-foreground hover:border-primary"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "BLVCK KINGS Cider — 8.4% ABV Premium British Cider | Wholesale Export" },
      { name: "description", content: "BLVCK KINGS Cider by L&K Meadows Ltd, Birmingham. 8.4% ABV premium strong British cider. Duty-free HMRC EMCS export, protected 18% distributor margins." },
      { name: "author", content: "L&K Meadows Ltd" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:title", content: "BLVCK KINGS Cider — 8.4% ABV Premium British Cider | Wholesale Export" },
      { name: "twitter:title", content: "BLVCK KINGS Cider — 8.4% ABV Premium British Cider | Wholesale Export" },
      { property: "og:description", content: "BLVCK KINGS Cider by L&K Meadows Ltd, Birmingham. 8.4% ABV premium strong British cider. Duty-free HMRC EMCS export, protected 18% distributor margins." },
      { name: "twitter:description", content: "BLVCK KINGS Cider by L&K Meadows Ltd, Birmingham. 8.4% ABV premium strong British cider. Duty-free HMRC EMCS export, protected 18% distributor margins." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/f463a5cd-d4f3-4133-ad92-99a049c3e65c/id-preview-af04256e--37dcd81c-d6d7-4c4d-945c-e1f016036000.lovable.app-1784319547948.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/f463a5cd-d4f3-4133-ad92-99a049c3e65c/id-preview-af04256e--37dcd81c-d6d7-4c4d-945c-e1f016036000.lovable.app-1784319547948.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
