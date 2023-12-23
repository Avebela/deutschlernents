import { Outlet, Link } from "react-router-dom";
import { CustomLink } from "./CustomLink";

const Layout = () => {
  return (
    <div className="wrapper">
      <header>
        <CustomLink to="/">Главная</CustomLink>
        <CustomLink to="/type">Учиться</CustomLink>
        <CustomLink to="/about">О нас</CustomLink>
        <CustomLink to="/todo">Задания</CustomLink>
      </header>

      <main>
        <Outlet />
      </main>
      <aside>
        <Link to={`/type`}>
          <h3>Sprechen</h3>
        </Link>

        <h3>Hören</h3>
        <h3>Lesen</h3>
        <h3>Schreiben</h3>
      </aside>
      <footer>&copy; Avebela</footer>
    </div>
  );
};

export { Layout };
