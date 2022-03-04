import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgAccounts(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" {...props}>
      <Path d="M10 1l-5.594.688L6.188 3.5l-6 6 1.406 1.406 6.031-6.031 1.688 1.719zm7 3v20h7V4zm-8 6v14h7V10zm-8 6v8h7v-8z" />
    </Svg>
  );
}

export default SvgAccounts;
