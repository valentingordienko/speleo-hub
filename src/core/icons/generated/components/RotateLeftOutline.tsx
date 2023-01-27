import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/RotateLeftOutline.svg';

export function RotateLeftOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="RotateLeftOutline">
      <SVG />
    </Icon>
  );
}
