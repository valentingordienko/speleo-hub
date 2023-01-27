import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/PowerSolid.svg';

export function PowerSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="PowerSolid">
      <SVG />
    </Icon>
  );
}
