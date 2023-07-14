import React from 'react'

export default function FormFeild({LableName,type,placeholder,name,value,handleChange,isSupriseme,handleSupriseme}) {
  return (
    <div>
      <div className='flex item-center gap-2 mb-2'>
        <label
        htmlFor={name}
        className='block text-sm font-medium text-grey-900'
        >
          {LableName}
        </label>
        {isSupriseme && (
          <button
            type="button"
            onClick={handleSupriseme}
            className='font-semibold bg-[#ECECF1] py-1 px-2 rounded-[5px] text-xs text-black'
          >
            suprise me
          </button>
        )}
      </div>
      <input 
        type={type}
        value={value}
        id={name}
        placeholder={placeholder}
        name={name}
        onChange={handleChange}
        required
        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#4649ff] focus:border-[#4649ff] outline-none block w-full p-3 '
      />
    </div>
  )
}
