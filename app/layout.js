export const metadata = {
  title: "Find – Job Search Engine",
  description: "AI-powered job search platform in Arabic and English",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
