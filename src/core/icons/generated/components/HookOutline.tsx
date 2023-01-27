import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/HookOutline.svg';

export function HookOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="HookOutline">
      <SVG />
    </Icon>
  );
}
