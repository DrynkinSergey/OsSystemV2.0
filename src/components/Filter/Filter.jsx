import { FilterOption, FilterSelect } from './Filter.styled'
import { useDispatch, useSelector } from 'react-redux'
import { setFilter } from '../../redux/filterSlice'
import { selectFilter } from '../../redux/selectors'

export const Filter = () => {
	const filterValue = useSelector(selectFilter)
	const dispatch = useDispatch()
	
	const handleFieldChange = e => {
		dispatch(setFilter(e.target.value))
	}
	return (
		<FilterSelect value={filterValue} onChange={handleFieldChange}>
			<FilterOption value='default'>Default</FilterOption>
			<FilterOption value='name'>Name</FilterOption>
			<FilterOption value='age'>Age</FilterOption>
		</FilterSelect>
	)
}
