import React from 'react';
import PropTypes from 'prop-types';

import { NView } from '@native-components';

const Space = (props) => {
  const { value } = props;

  return <NView {...props} style={{ height: value }} />;
};

Space.defaultProps = {
  value: 0
};

Space.propTypes = {
  value: PropTypes.number
};

export default Space;
