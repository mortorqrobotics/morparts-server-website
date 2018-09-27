import PropTypes from "prop-types";

export const modalPropTypes = {
    isOpen: PropTypes.bool.isRequired,
    onAfterOpen: PropTypes.func.isRequired,
    onRequestClose: PropTypes.func.isRequired,
};

export const modalProps = (self, str) => ({
    isOpen: self.state[str],
    onAfterOpen: () => self.setState({ [str]: true }),
    onRequestClose: () => self.setState({ [str]: false }),
});

export const modalPropsForward = self => ({
    isOpen: self.props.isOpen,
    onAfterOpen: self.props.onAfterOpen,
    onRequestClose: self.props.onRequestClose,
});
