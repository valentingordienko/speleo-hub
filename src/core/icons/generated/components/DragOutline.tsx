import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/DragOutline.svg';

export function DragOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="DragOutline">
      <SVG />
    </Icon>
  );
}
