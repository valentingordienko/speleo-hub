import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/RotateRightOutline.svg';

export function RotateRightOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="RotateRightOutline">
      <SVG />
    </Icon>
  );
}
