import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/CalculateOutline.svg';

export function CalculateOutline(props: TProps) {
  return (
    <Icon {...props} name="CalculateOutline">
      <SVG />
    </Icon>
  );
}
