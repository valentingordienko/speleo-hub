import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/LockSolid.svg';

export function LockSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="LockSolid">
      <SVG />
    </Icon>
  );
}
