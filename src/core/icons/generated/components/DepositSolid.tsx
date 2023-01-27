import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/DepositSolid.svg';

export function DepositSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="DepositSolid">
      <SVG />
    </Icon>
  );
}
