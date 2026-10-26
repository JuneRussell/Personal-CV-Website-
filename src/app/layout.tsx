import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Junerussell Patris | Aspiring Software Developer",
  description: "Explore the personal CV, technical interests, education, and EcoTrack capstone project of Junerussell Patris, a student at Davao del Norte State College.",
  openGraph: { title: "Junerussell Patris | Aspiring Software Developer", description: "Student CV, technical interests, and EcoTrack capstone project.", type: "website" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
