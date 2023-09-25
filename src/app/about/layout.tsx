export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <nav>
        <h1>My aboutnav</h1>
      </nav>
      {children}
    </>
  );
}
