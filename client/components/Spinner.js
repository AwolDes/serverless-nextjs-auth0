import React from 'react';
import { BounceLoader, ClipLoader } from 'react-spinners';
import PropTypes from 'prop-types';

// look at https://www.react-spinners.com/ for more types

const SpinnerType = ({ type, size, sizeUnit }) => {
  switch (type) {
    case 'bounce':
      return <BounceLoader color="#123abc" sizeUnit={sizeUnit} size={size} />;
    case 'clip':
      return <ClipLoader color="#123abc" sizeUnit={sizeUnit} size={size} />;
    default:
      return <ClipLoader color="#123abc" sizeUnit={sizeUnit} size={size} />;
  }
};

SpinnerType.propTypes = {
  type: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  sizeUnit: PropTypes.string.isRequired,
};

const Spinner = ({ type, size, sizeUnit }) => (
  <div className="container">
    <div className="row">
      <div className="align-center">
        <SpinnerType type={type} size={size} sizeUnit={sizeUnit} />
      </div>
    </div>
  </div>
);

Spinner.propTypes = {
  type: PropTypes.string.isRequired,
  size: PropTypes.number,
  sizeUnit: PropTypes.string,
};

Spinner.defaultProps = {
  size: 35,
  sizeUnit: 'px',
};

export default Spinner;
