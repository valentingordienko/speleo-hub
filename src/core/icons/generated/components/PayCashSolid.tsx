import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/PayCashSolid.svg';

export function PayCashSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="PayCashSolid">
      <SVG />
    </Icon>
  );
}
