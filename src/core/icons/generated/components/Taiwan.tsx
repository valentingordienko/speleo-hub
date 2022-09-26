import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Taiwan.svg';

export function Taiwan(props: TProps) {
  return (
    <Icon {...props} name="Taiwan">
      <SVG />
    </Icon>
  );
}
