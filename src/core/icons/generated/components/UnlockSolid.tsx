import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/UnlockSolid.svg';

export function UnlockSolid(props: TProps) {
  return (
    <Icon {...props} name="UnlockSolid">
      <SVG />
    </Icon>
  );
}
