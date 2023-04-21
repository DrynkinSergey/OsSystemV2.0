import PropTypes from 'prop-types'
function Avatar({ svg }) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 762 762'
			fill='none'
			shapeRendering='auto'
			dangerouslySetInnerHTML={{ __html: svg }}
		/>
	)
}
Avatar.propTypes = PropTypes.string.isRequired
export default Avatar
