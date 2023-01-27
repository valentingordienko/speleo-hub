import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/PersonOutline.svg';

export function PersonOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="PersonOutline">
      <SVG />
    </Icon>
  );
}
