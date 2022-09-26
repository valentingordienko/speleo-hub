import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/RotateLeftOutline.svg';

export function RotateLeftOutline(props: TProps) {
  return (
    <Icon {...props} name="RotateLeftOutline">
      <SVG />
    </Icon>
  );
}
