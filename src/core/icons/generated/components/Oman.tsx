import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Oman.svg';

export function Oman(props: TBaseProps) {
  return (
    <Icon {...props} name="Oman">
      <SVG />
    </Icon>
  );
}
