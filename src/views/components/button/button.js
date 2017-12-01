import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import './button.css';

/**
 * Reusable button html
 *
 * @param children
 * @param className
 * @param onClick
 * @param type
 * @returns {HTML}
 * @constructor
 */
const Button = ({children, className, onClick, type = 'button'}) => {
  const cssClasses = classNames('btn', className);
  return (
    <button className={cssClasses} onClick={onClick} type={type}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['button', 'reset', 'submit'])
};


export default Button;
