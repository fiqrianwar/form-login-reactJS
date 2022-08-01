import React from 'react'

const FormInput = ({
    type, 
    name, 
    value, 
    icon, 
    event,
    placeholder, 
}) => {
  return (
    <div>
        <div class="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
						<input 
                            class       = "input100" 
                            type        = {type} 
                            name        = {name} 
                            value       = {value} 
                            onChange    = {event}
                            placeholder = {placeholder} 
                        />
						<span class="focus-input100"></span>
						<span class="symbol-input100">
							<i class={icon} aria-hidden="true"></i>
						</span>
					</div>

					
    </div>
  )
}

export default FormInput