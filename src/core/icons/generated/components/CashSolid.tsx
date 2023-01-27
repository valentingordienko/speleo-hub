import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/CashSolid.svg';

export function CashSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="CashSolid">
      <SVG />
    </Icon>
  );
}
