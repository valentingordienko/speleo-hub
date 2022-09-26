import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/ToCustomerSolid.svg';

export function ToCustomerSolid(props: TProps) {
  return (
    <Icon {...props} name="ToCustomerSolid">
      <SVG />
    </Icon>
  );
}
