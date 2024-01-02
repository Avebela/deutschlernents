import { Link, useMatch } from "react-router-dom";
// https://tokmakov.msk.ru/blog/item/676
const CustomLink = ({ children, to, ...props }) => {
  const match = useMatch(to);

  return (
    <Link
      to={to}
      style={{
        color: match ? "var(--color-active)" : "white",
      }}
      {...props}
    >
      {children}
    </Link>
  );
};

export { CustomLink };
