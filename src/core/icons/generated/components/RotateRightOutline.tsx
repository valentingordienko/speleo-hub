import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/RotateRightOutline.svg';

export function RotateRightOutline(props: TProps) {
  return (
    <Icon {...props} name="RotateRightOutline">
      <SVG />
    </Icon>
  );
}
