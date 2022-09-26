import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Montserrat.svg';

export function Montserrat(props: TProps) {
  return (
    <Icon {...props} name="Montserrat">
      <SVG />
    </Icon>
  );
}
