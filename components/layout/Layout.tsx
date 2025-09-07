
import Header from "./Header";
import Footer from "./Footer";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="min-h-screen px-4 py-8 bg-gray-50">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;