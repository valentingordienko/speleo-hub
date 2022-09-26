import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/CashSolid.svg';

export function CashSolid(props: TProps) {
  return (
    <Icon {...props} name="CashSolid">
      <SVG />
    </Icon>
  );
}
