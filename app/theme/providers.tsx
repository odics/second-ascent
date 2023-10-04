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
      body: `'Lato', sans-serif`,
      heading: `'Lato', sans-serif`,
      text: `'Lato', sans-serif`,
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
        },
      },
      Button: {
        baseStyle: {
          fontFamily: `'Lato', sans-serif`,
          letterSpacing: ".15em",
          fontWeight: "700",
        },
        variants: {
          hero: {
            bg: "#354463",
            textColor: "white",
            fontSize: "md",
            fontWeight: "normal",
            borderRadius: "3px",
          },
          secondary: {
            bg: "transparent",
            textColor: "btn-secondary-text",
            fontSize: "md",
            borderWidth: "1px",
            borderColor: "btn-secondary-border",
            borderRadius: "3px",
          },
          destructive: {
            bg: "transparent",
            textColor: "red",
            fontSize: "md",
            borderWidth: "1px",
            borderColor: "red",
            borderRadius: "3px",
          },

          showcase: {
            bg: "transparent",
            textColor: "white",
            fontSize: "md",
            borderWidth: "1px",
            borderColor: "btn-secondary-border",
            borderRadius: "3px",
          },
          navLinkHome: {
            bg: "transparent",
            fontSize: "md",
            textColor: "white",
          },
          navLink: {
            bg: "transparent",
            fontSize: "md",
            textColor: "nav-default",
          },
          navButtonHome: {
            bg: "white",
            borderRadius: "3px",
            paddingX: "20px",
            textColor: "white",
            fontSize: "md",
          },
          navButton: {
            bg: "text-default",
            borderRadius: "3px",
            paddingX: "20px",
            textColor: "nav-purple",
            fontSize: "md",
          },
          navActive: {
            bg: "transparent",
            fontSize: "md",
            textColor: "#946BDE",
          },
          loginButton: {
            bg: "btn-primary-bg",
            borderRadius: "5px",
            paddingX: "26px",
            paddingY: "23px",
            textColor: "white",
            fontSize: "sm",
          },
          drawerActive: {
            bg: "mobile-nav-active",
          },
          drawerButton: {
            bg: "bg-default",
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
