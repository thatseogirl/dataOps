import PropTypes from "prop-types";
import StyledButton from "../../asset/styles/Button.styled";

const Button = ({
    color,
    text,
    onClick,
    bgColor,
    position,
    width,
    border,
    textTransform,
    padding,
    borderRadius,
    className
}) => {
    return (
        <StyledButton className={className}

            onClick={onClick}
        >
            {text}
        </StyledButton>
    );
};

Button.defaultProps = {
    color: "#fff",
};

Button.proptype = {
    className: PropTypes.string,
    text: PropTypes.string,
    onClick: PropTypes.func,
};

export default Button;
