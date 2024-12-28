import PropTypes from "prop-types";

export const Paragraph = ({ children, label, cn }) => {
  return (
    <p className={`inter  text-slate-700 ${cn}`} aria-label={label}>
      {children}
    </p>
  );
};
Paragraph.propTypes = {
  children: PropTypes.node,
  label: PropTypes.string,
  cn: PropTypes.string,
};
