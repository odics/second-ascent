"use client";

import "@fontsource/permanent-marker";
import "@fontsource/roboto/100.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "@fontsource/roboto/900.css";

import { CacheProvider } from "@emotion/react";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import { ReactNode } from "react";

type ProviderProps = {
  children: ReactNode;
};

export function Providers({ children }: ProviderProps) {
  const tokens = {
    colors: {
      light: {
        "mobile-nav-active": "#F0F0FF",
      },
      dark: {
        "mobile-nav-active": "#3c4047",
      },
    },
  };

  const semanticTokens = {
    colors: {
      "bg-default": {
        // default: tokens.colors.light["bg-default"],
        // _dark: tokens.colors.dark["bg-default"],
      },
    },
  };

  const theme = extendTheme({
    semanticTokens,
    styles: {
      global: {
        body: {
          bg: "bg-default",
          letterSpacing: "1px",
          lineHeight: "1.6em",
        },
      },
    },
    fonts: {
      body: `'Roboto', sans-serif`,
      heading: `'Lato', sans-serif`,
      text: `'Roboto', sans-serif`,
    },
    components: {
      Progress: {
        baseStyle: {
          filledTrack: {
            bg: "#946BDE",
          },
          track: {
            borderRadius: "3px",
          },
        },
      },
      Badge: {
        variants: {
          gearBadge: {
            textColor: "#FC6A00",
            fontFamily: `'Permanent Marker', sans-serif`,
          },
        },
      },
      Text: {
        variants: {
          hero: {
            fontFamily: `'Permanent Marker', sans-serif`,
            fontSize: "4rem",
            lineHeight: "5rem",
            textColor: "#354463",
          },
          heroByline: {
            fontFamily: `'Roboto', sans-serif`,
            textColor: "#354463",
            lineHeight: "1.7rem",
          },
          gear: {
            fontFamily: `'Roboto', sans-serif`,
            padding: "0",
          },
        },
      },
      Link: {
        variants: {
          navLink: {
            bg: "white",
            textColor: "#354463",
            fontSize: "md",
            fontWeight: "normal",
            borderColor: "#354463",
          },
        },
      },
      Button: {
        baseStyle: {
          fontFamily: `'Roboto', sans-serif`,
          letterSpacing: ".15em",
        },
        variants: {
          primary: {
            bg: "#354463",
            textColor: "white",
            fontSize: "sm",
            fontWeight: "semibold",
            borderRadius: "3px",
            py: "1rem",
            px: "1.5rem",
          },
          hero: {
            bg: "#354463",
            textColor: "white",
            fontSize: "md",
            fontWeight: "normal",
            borderRadius: "3px",
            py: "1.5rem",
            px: "2rem",
          },
          navLink: {
            bg: "white",
            textColor: "#354463",
            fontSize: "md",
            fontWeight: "normal",
            borderRadius: "3px",
            border: "1px",
            borderColor: "#354463",
            py: "1rem",
            px: "1.5rem",
          },
          gearNav: {
            bg: "white",
            textColor: "#354463",
            fontSize: "md",
            borderRadius: "3px",
            px: "0",
          },
        },
      },
      Heading: {
        baseStyle: {
          textColor: "heading-default",
        },
      },
      Textarea: {
        baseStyle: {
          bg: "bg-input-default",
          border: "1px solid",
          borderColor: "border-input-default",
          textColor: "text-default",
        },
      },
    },
  });

  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}
