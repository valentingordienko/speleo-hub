import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/EraserOutline.svg';

export function EraserOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="EraserOutline">
      <SVG />
    </Icon>
  );
}
