import React from 'react'
const inputStyle = "w-full h-10 text-black text-md rounded-lg pl-4 mt-2 border-2 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:leading-6"
interface FormInputProps {
    type: string;
    placeholder: string;
    id: string;
    name: string;
    value: string;
    onChange: (event: React.ChangeEvent<any>) => void;
}
const FormInput = ({ type, placeholder, id, name, value, onChange }: FormInputProps) => {
    return (
        <input className={inputStyle} type={type} placeholder={placeholder} onChange={onChange} id={id} name={name} value={value} required />
    )
}
export default FormInput