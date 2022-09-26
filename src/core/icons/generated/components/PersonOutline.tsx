import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/PersonOutline.svg';

export function PersonOutline(props: TProps) {
  return (
    <Icon {...props} name="PersonOutline">
      <SVG />
    </Icon>
  );
}
