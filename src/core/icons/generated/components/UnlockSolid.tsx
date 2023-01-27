import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/UnlockSolid.svg';

export function UnlockSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="UnlockSolid">
      <SVG />
    </Icon>
  );
}
