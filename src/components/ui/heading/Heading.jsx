import PropTypes from "prop-types";

export const Heading = ({ level, children, cn }) => {
  // Dynamically choose the heading level
  const Tag = `h${level}`;

  return (
    <Tag className={`space font-medium leading-none tracking-tight ${cn}`}>
      {children}
    </Tag>
  );
};

Heading.propTypes = {
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  children: PropTypes.node,
  cn: PropTypes.string,
};

Heading.defaultProps = {
  level: 1,
  children: "Heading",
  cn: "",
};
