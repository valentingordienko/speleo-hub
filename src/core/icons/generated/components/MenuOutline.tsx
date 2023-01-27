import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/MenuOutline.svg';

export function MenuOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="MenuOutline">
      <SVG />
    </Icon>
  );
}
