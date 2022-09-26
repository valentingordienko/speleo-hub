import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/LeftDoubleOutline.svg';

export function LeftDoubleOutline(props: TProps) {
  return (
    <Icon {...props} name="LeftDoubleOutline">
      <SVG />
    </Icon>
  );
}
