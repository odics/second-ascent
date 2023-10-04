import "./globals.css";
import Container from "./components/layout/Container";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/layout/Hero";
import Gear from "./components/layout/Gear";
import { Providers } from "./theme/providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Container>
            <Navbar />
            {children}
          </Container>
        </Providers>
      </body>
    </html>
  );
}
