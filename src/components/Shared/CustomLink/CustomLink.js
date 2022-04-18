const { useResolvedPath, useMatch, Link } = require("react-router-dom");

function CustomLink({ children, to }) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div>
      <Link
        style={{
          color: match ? "rgb(56, 87, 241)" : "rgb(44, 121, 121)",
        }}
        to={to}
      >
        {children}
      </Link>
    </div>
  );
}

export default CustomLink;
