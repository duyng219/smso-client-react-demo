import React, { useState } from 'react'

import './form-input.styles.scss'

const FormInput = ({ handleChange, label, ...otherProps}) => {
    // const [focused, setFocused] = useState(false)
    // const {label,errorMessage, onChange, id, ...inputProps } = props;

    // const handleFocus = (e) => {
    //     setFocused(true)
    // }
    return (
        <div className='group'>
            <input className='form-input' onChange={handleChange} {...otherProps}/>
            {
                label ? (<label className={`${otherProps.value ? 'shrink' : ''} form-input-label `}>
                    {label}
                </label>) 
                : null
            }
            
        </div>
    )
}

export default FormInput