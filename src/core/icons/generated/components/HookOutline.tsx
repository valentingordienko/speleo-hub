import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/HookOutline.svg';

export function HookOutline(props: TProps) {
  return (
    <Icon {...props} name="HookOutline">
      <SVG />
    </Icon>
  );
}
