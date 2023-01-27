import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Taiwan.svg';

export function Taiwan(props: TBaseProps) {
  return (
    <Icon {...props} name="Taiwan">
      <SVG />
    </Icon>
  );
}
