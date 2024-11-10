import { useContext, useState } from "react"
import { ThemeContext } from '../../contexts/theme.context'

import './Checkbox.css'

const Checkbox = ({ label, id, value, checked, onChange }) => {

    const { theme } = useContext(ThemeContext)
    const variant = theme === 'light' ? 'light' : 'dark'

    return (
        <div className={variant === 'light' ? 'checkbox-wrapper-light' : 'checkbox-wrapper-dark'}>
            <label htmlFor={id}>
                <input
                    type='checkbox'
                    id={id}
                    value={value}
                    checked={checked}
                    onChange={onChange}
                    className="mt-2"
                />
                <span>{label}</span>
            </label>
        </div>
    )
}
export default Checkbox
