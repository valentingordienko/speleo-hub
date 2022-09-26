import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Oman.svg';

export function Oman(props: TProps) {
  return (
    <Icon {...props} name="Oman">
      <SVG />
    </Icon>
  );
}
