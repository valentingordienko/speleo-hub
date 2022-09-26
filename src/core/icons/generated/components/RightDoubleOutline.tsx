import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/RightDoubleOutline.svg';

export function RightDoubleOutline(props: TProps) {
  return (
    <Icon {...props} name="RightDoubleOutline">
      <SVG />
    </Icon>
  );
}
