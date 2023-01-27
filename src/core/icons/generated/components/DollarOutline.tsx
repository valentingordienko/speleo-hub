import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/DollarOutline.svg';

export function DollarOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="DollarOutline">
      <SVG />
    </Icon>
  );
}
