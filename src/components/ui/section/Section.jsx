import PropTypes from "prop-types";

export const Section = ({ children, label, onClick, cn, id }) => {
  return (
    <section
      aria-label={label}
      onClick={onClick}
      className={`flex flex-col sm:gap-0 sm:flex-row items-center justify-around sm:justify-center min-h-[calc(100vh-120px)] mb-[8vh] p-4 ${cn}`}
      id={`#${id}`}
    >
      {children}
    </section>
  );
};

Section.propTypes = {
  children: PropTypes.node.isRequired,
  label: PropTypes.string,
  onClick: PropTypes.func,
  cn: PropTypes.string,
  id: PropTypes.string,
};
