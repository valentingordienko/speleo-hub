import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Chile.svg';

export function Chile(props: TBaseProps) {
  return (
    <Icon {...props} name="Chile">
      <SVG />
    </Icon>
  );
}
