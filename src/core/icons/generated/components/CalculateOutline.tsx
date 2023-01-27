import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/CalculateOutline.svg';

export function CalculateOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="CalculateOutline">
      <SVG />
    </Icon>
  );
}
