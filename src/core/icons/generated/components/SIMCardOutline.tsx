import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/SIMCardOutline.svg';

export function SIMCardOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="SIMCardOutline">
      <SVG />
    </Icon>
  );
}
