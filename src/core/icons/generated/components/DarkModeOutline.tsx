import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/DarkModeOutline.svg';

export function DarkModeOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="DarkModeOutline">
      <SVG />
    </Icon>
  );
}
