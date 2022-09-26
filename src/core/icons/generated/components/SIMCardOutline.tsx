import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/SIMCardOutline.svg';

export function SIMCardOutline(props: TProps) {
  return (
    <Icon {...props} name="SIMCardOutline">
      <SVG />
    </Icon>
  );
}
