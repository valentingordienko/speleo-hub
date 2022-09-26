import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/EyeCloseOutline.svg';

export function EyeCloseOutline(props: TProps) {
  return (
    <Icon {...props} name="EyeCloseOutline">
      <SVG />
    </Icon>
  );
}
