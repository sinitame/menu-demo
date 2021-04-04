import React, { Component } from "react";
import PropTypes from "prop-types";
import { IconTypes } from "./iconTypes";
const SaveIcon = () => {
  return (
      <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className={`button__icon`}
      >
        <title>Save</title>
        <path d="M12,19 C11.4477153,19 11,18.5522847 11,18 L11,1 C11,0.44771525 11.4477153,1.01453063e-16 12,0 C12.5522847,-1.01453063e-16 13,0.44771525 13,1 L13,18 C13,18.5522847 12.5522847,19 12,19 Z" />
        <path d="M12 20C11.7348052 19.9999434 11.4804927 19.8945494 11.293 19.707L4.293 12.707C3.91402779 12.3146211 3.91944763 11.6909152 4.30518142 11.3051814 4.69091522 10.9194476 5.31462111 10.9140278 5.707 11.293L12 17.586 18.293 11.293C18.6853789 10.9140278 19.3090848 10.9194476 19.6948186 11.3051814 20.0805524 11.6909152 20.0859722 12.3146211 19.707 12.707L12.707 19.707C12.5195073 19.8945494 12.2651948 19.9999434 12 20zM23 24L1 24C.44771525 24 6.76353751e-17 23.5522847 0 23-6.76353751e-17 22.4477153.44771525 22 1 22L23 22C23.5522847 22 24 22.4477153 24 23 24 23.5522847 23.5522847 24 23 24z" />
        <path d="M1 24C.44771525 24 6.76353751e-17 23.5522847 0 23L0 19C-6.76353751e-17 18.4477153.44771525 18 1 18 1.55228475 18 2 18.4477153 2 19L2 23C2 23.5522847 1.55228475 24 1 24zM23 24C22.4477153 24 22 23.5522847 22 23L22 19C22 18.4477153 22.4477153 18 23 18 23.5522847 18 24 18.4477153 24 19L24 23C24 23.5522847 23.5522847 24 23 24z" />
      </svg>
  );
};

export default class Icon extends Component {
  render() {
    const { icon } = this.props;
    switch (icon) {
      case IconTypes.SAVE:
        return <SaveIcon />;

      default:
        return null;
    }
  }
}

Icon.propTypes = {
  icon: PropTypes.oneOf(Object.values(IconTypes))
};

Icon.defaultProps = {
  icon: IconTypes.NONE
};
