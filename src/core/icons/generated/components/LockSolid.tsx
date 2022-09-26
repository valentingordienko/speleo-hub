import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/LockSolid.svg';

export function LockSolid(props: TProps) {
  return (
    <Icon {...props} name="LockSolid">
      <SVG />
    </Icon>
  );
}
