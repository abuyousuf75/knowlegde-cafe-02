

import PropTypes from 'prop-types'

const BookMark = ({ bookmark }) => {
    const {title} = bookmark;
  return <div className='bg-white p-2 mb-4 rounded-md'>
            <h3 className='font-semibold text-xl'>{title}</h3>
  </div>;
};

BookMark.propTypes = {
  bookmark: PropTypes.array,
};

export default BookMark