import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/DepositSolid.svg';

export function DepositSolid(props: TProps) {
  return (
    <Icon {...props} name="DepositSolid">
      <SVG />
    </Icon>
  );
}
