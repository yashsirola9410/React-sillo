import React, { useId } from 'react';
import PropTypes from 'prop-types';

// Wrap the component correctly using forwardRef
const Select = React.forwardRef(({
  options,
  label,
  className,
  ...props
}, ref) => {
  const id = useId();
  return (
    <div className="w-full">
      {label && <label htmlFor={id} className="">{label}</label>}
      <select
        {...props}
        id={id}
        ref={ref}
        className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
      >
        {options?.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
});

// Define PropTypes and defaultProps separately
Select.displayName = 'Select';

Select.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  label: PropTypes.string,
  className: PropTypes.string,
};

Select.defaultProps = {
  label: '',
  className: '',
};

export default Select;

// Purpose: A reusable <Select> dropdown component.
// Features:
// Uses useId() for unique accessibility-friendly id.
// Supports optional label rendering.
// Accepts additional props and class names.
// Uses React.forwardRef() to allow ref forwarding.
// Utilizes Tailwind CSS for styling.
