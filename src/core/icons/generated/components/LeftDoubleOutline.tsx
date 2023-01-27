import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/LeftDoubleOutline.svg';

export function LeftDoubleOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="LeftDoubleOutline">
      <SVG />
    </Icon>
  );
}
