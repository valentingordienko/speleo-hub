import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/CubeOutline.svg';

export function CubeOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="CubeOutline">
      <SVG />
    </Icon>
  );
}
