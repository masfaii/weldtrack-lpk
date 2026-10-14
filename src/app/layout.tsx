export const metadata = {
  title: "WELDTRACK LPK",
  description: "Sistem manajemen LPK Welding",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body style={{ margin: 0, fontFamily: "system-ui, sans-serif" }}>{children}</body>
    </html>
  );
}
