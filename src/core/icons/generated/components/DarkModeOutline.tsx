import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/DarkModeOutline.svg';

export function DarkModeOutline(props: TProps) {
  return (
    <Icon {...props} name="DarkModeOutline">
      <SVG />
    </Icon>
  );
}
