import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/FinanceSolid.svg';

export function FinanceSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="FinanceSolid">
      <SVG />
    </Icon>
  );
}
