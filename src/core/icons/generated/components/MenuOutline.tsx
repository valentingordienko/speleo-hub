import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/MenuOutline.svg';

export function MenuOutline(props: TProps) {
  return (
    <Icon {...props} name="MenuOutline">
      <SVG />
    </Icon>
  );
}
