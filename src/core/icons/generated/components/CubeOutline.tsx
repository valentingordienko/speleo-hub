import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/CubeOutline.svg';

export function CubeOutline(props: TProps) {
  return (
    <Icon {...props} name="CubeOutline">
      <SVG />
    </Icon>
  );
}
