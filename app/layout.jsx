import "@styles/globals.css";
import Nav from "@components/Nav";
import Provider from "@components/Provider";
import Footer from "@components/Footer";

export const metadata = {
  title: "Donatly",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="main">
        <Provider>
          <Nav />
          {children}
          <Footer />
        </Provider>
        <script src="../path/to/flowbite/dist/flowbite.min.js"></script>
      </body>
    </html>
  );
}
