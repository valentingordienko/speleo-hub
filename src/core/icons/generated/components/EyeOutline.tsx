import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/EyeOutline.svg';

export function EyeOutline(props: TProps) {
  return (
    <Icon {...props} name="EyeOutline">
      <SVG />
    </Icon>
  );
}
