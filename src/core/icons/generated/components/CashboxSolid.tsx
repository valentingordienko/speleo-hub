import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/CashboxSolid.svg';

export function CashboxSolid(props: TProps) {
  return (
    <Icon {...props} name="CashboxSolid">
      <SVG />
    </Icon>
  );
}
