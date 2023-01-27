import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/RightDoubleOutline.svg';

export function RightDoubleOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="RightDoubleOutline">
      <SVG />
    </Icon>
  );
}
