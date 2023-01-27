import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/AmericanSamoa.svg';

export function AmericanSamoa(props: TBaseProps) {
  return (
    <Icon {...props} name="AmericanSamoa">
      <SVG />
    </Icon>
  );
}
