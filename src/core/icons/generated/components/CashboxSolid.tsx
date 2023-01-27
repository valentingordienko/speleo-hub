import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/CashboxSolid.svg';

export function CashboxSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="CashboxSolid">
      <SVG />
    </Icon>
  );
}
