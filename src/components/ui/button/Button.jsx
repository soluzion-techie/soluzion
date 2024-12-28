import { LoaderCircle } from "lucide-react";
import PropTypes from "prop-types";
export const Button = ({
  children,
  label,
  cn,
  disabled = false,
  isLoading,
  onClick,
}) => {
  if (isLoading) {
    return (
      <button
        className={`flex items-center gap-[1vw] opacity-95 cursor-not-allowed  ${cn} `}
        aria-label={label}
        disabled
        onClick={onClick}
      >
        <LoaderCircle className="animate-spin" />
        {children}
      </button>
    );
  }
  return (
    <button
      className={`flex items-center gap-[1vw] active:scale-90 duration-300 transition-all ${cn}`}
      aria-label={label}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  label: PropTypes.string,
  cn: PropTypes.string,
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  label: "",
  cn: "",
  disabled: false,
  isLoading: false,
  onClick: () => {},
};
