import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/EyeOutline.svg';

export function EyeOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="EyeOutline">
      <SVG />
    </Icon>
  );
}
