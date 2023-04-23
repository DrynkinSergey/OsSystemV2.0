import { useState } from 'react'
import { FilterOption, FilterSelect } from './Filter.styled'

export const Filter = () => {
	const [filterField, setFilterField] = useState('name')
	const handleFieldChange = event => {
		setFilterField(event.target.value)
	}
	return (
		<FilterSelect value={filterField} onChange={handleFieldChange}>
			<FilterOption value='name'>Name</FilterOption>
			<FilterOption value='age'>Age</FilterOption>
		</FilterSelect>
	)
}
