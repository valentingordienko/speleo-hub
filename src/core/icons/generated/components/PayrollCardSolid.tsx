import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/PayrollCardSolid.svg';

export function PayrollCardSolid(props: TProps) {
  return (
    <Icon {...props} name="PayrollCardSolid">
      <SVG />
    </Icon>
  );
}
