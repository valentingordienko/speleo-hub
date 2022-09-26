import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Chile.svg';

export function Chile(props: TProps) {
  return (
    <Icon {...props} name="Chile">
      <SVG />
    </Icon>
  );
}
