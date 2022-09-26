import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/FinanceSolid.svg';

export function FinanceSolid(props: TProps) {
  return (
    <Icon {...props} name="FinanceSolid">
      <SVG />
    </Icon>
  );
}
