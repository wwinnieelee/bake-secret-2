import Navbar from "../components/Navbar";
const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="p-20 bg-background h-full min-h-screen md:pl-40">
        {children}
      </div>
    </>
  );
};

export default Layout;
