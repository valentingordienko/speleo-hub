import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/HookSolid.svg';

export function HookSolid(props: TProps) {
  return (
    <Icon {...props} name="HookSolid">
      <SVG />
    </Icon>
  );
}
