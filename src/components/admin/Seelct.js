"use client"
import React, { useState } from 'react';
import Select from 'react-select';

const CustomSelect = () => {
  const options = [
    { value: 'apple', label: 'Apple' },
    { value: 'orange', label: 'Orange' },
    { value: 'banana', label: 'Banana' },
  ];

  const [selectedOption, setSelectedOption] = useState(null);

  const customStyles = {
    control: (provided) => ({
      ...provided,
      backgroundColor: '#FF7F50',
      minHeight: 50,
      width: '100%',
      height: 50,
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? 'blue' : 'white',
      color: 'black',
      fontSize: 14,
    }),
  };

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '15px' }}>
      <Select
        value={selectedOption}
        onChange={handleChange}
        options={options}
        styles={customStyles}
      />
      <div style={{ width: '20px' }} />
      <Select
        value={selectedOption}
        onChange={handleChange}
        options={options}
        styles={customStyles}
      />
    </div>
  );
};

export default CustomSelect;
