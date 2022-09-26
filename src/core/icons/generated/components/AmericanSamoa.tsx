import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/AmericanSamoa.svg';

export function AmericanSamoa(props: TProps) {
  return (
    <Icon {...props} name="AmericanSamoa">
      <SVG />
    </Icon>
  );
}
