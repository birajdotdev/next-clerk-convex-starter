import { ClerkProvider as ClerkNextJSProvider } from "@clerk/nextjs";
import { shadcn } from "@clerk/themes";
import { ui } from "@clerk/ui";

type ClerkProviderProps = React.ComponentProps<typeof ClerkNextJSProvider>;

export function ClerkProvider({
  children,
  appearance,
  ...props
}: ClerkProviderProps) {
  return (
    <ClerkNextJSProvider
      ui={ui}
      appearance={{
        theme: shadcn,
        options: {
          logoImageUrl: "/convex.svg",
          socialButtonsPlacement: "bottom",
        },
        ...appearance,
      }}
      {...props}
    >
      {children}
    </ClerkNextJSProvider>
  );
}
