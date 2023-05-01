import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <header>
        <h2>HEADER</h2>
      </header>
      <Outlet />
      <footer>
        <h2>FOOTER</h2>
      </footer>
    </>
  );
}
