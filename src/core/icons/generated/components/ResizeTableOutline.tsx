import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/ResizeTableOutline.svg';

export function ResizeTableOutline(props: TProps) {
  return (
    <Icon {...props} name="ResizeTableOutline">
      <SVG />
    </Icon>
  );
}
