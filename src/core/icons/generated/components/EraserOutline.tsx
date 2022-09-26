import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/EraserOutline.svg';

export function EraserOutline(props: TProps) {
  return (
    <Icon {...props} name="EraserOutline">
      <SVG />
    </Icon>
  );
}
