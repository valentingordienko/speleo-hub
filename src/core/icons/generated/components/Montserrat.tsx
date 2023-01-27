import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Montserrat.svg';

export function Montserrat(props: TBaseProps) {
  return (
    <Icon {...props} name="Montserrat">
      <SVG />
    </Icon>
  );
}
