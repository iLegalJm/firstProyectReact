import PropTypes from 'prop-types';

export const Button = ({ name, evento }) => {
  return (
    <>
      <button className='bg-green-400 text-white font-bold py-2 px-4 rounded' onClick={evento}>{name}</button>
    </>
  )
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  evento: PropTypes.func.isRequired,
}
