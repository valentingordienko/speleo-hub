import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/ResizeTableOutline.svg';

export function ResizeTableOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="ResizeTableOutline">
      <SVG />
    </Icon>
  );
}
