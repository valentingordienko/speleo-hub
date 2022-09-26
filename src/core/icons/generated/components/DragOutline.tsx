import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/DragOutline.svg';

export function DragOutline(props: TProps) {
  return (
    <Icon {...props} name="DragOutline">
      <SVG />
    </Icon>
  );
}
