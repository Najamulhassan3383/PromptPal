import Nav from "@components/Nav";
import "@styles/globals.css";

export const metadata = {
  title: "Promptopis",
  desciption: "Promptopis is a platform for sharing AI prompts and stories.",
};

function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>

        <main className="app">
          <Nav />
          {children}
        </main>
      </body>
    </html>
  );
}

export default RootLayout;
