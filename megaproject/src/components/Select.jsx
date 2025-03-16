import React,{useId} from 'react'
import PropTypes from 'prop-types'


function Select({  

  //options: An array of values for the dropdown.
// label: The text label for the dropdown.
// className: Additional CSS classes for styling.
// ...props: Captures any other props passed to the component (e.g., onChange, disabled).

  options,
  label,
  className,
  ...props
} , ref) {  //ref: A reference that can be passed to the <select> element for direct access.
  const id = useId()
  return (
    <div className = 'w-full'>
      {label && <label htmlFor={id} className=''></label>}
      <select
      {...props}
      id ={id}
      ref ={ref}
      className = {`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
      >
        {options?.map((option)=>(  // ye option ek array hai jipe map karna hai 
          <option key={option} value={option}>
          {option}
          </option>
        ))}
      </select>
    </div>
  )
}


Select.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  label: PropTypes.string,
  className: PropTypes.string,
}


export default  React.forwardRef(Select)

//Purpose: A reusable <Select> dropdown component.
// Features:
// Uses useId() for unique accessibility-friendly id.
// Supports optional label rendering.
// Accepts additional props and class names.
// Uses React.forwardRef() to allow ref forwarding.
// Utilizes Tailwind CSS for styling.
