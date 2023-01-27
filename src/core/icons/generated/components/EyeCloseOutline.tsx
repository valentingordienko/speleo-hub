import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/EyeCloseOutline.svg';

export function EyeCloseOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="EyeCloseOutline">
      <SVG />
    </Icon>
  );
}
