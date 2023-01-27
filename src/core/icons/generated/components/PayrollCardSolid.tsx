import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/PayrollCardSolid.svg';

export function PayrollCardSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="PayrollCardSolid">
      <SVG />
    </Icon>
  );
}
