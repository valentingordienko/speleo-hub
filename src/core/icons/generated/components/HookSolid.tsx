import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/HookSolid.svg';

export function HookSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="HookSolid">
      <SVG />
    </Icon>
  );
}
