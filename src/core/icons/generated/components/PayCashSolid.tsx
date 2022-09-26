import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/PayCashSolid.svg';

export function PayCashSolid(props: TProps) {
  return (
    <Icon {...props} name="PayCashSolid">
      <SVG />
    </Icon>
  );
}
