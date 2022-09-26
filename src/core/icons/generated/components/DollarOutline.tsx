import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/DollarOutline.svg';

export function DollarOutline(props: TProps) {
  return (
    <Icon {...props} name="DollarOutline">
      <SVG />
    </Icon>
  );
}
