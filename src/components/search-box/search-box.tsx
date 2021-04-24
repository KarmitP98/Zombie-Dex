import React from 'react';
import './search-box.styles.css';

// @ts-ignore
export const SearchBox = ( { placeholder, handleChange } ) => {
	
	return (
		<input type = "search"
		       name = "name"
		       id = "name"
		       className = {'search'}
		       placeholder = {placeholder}
		       onChange = {handleChange}/>
	);
};
