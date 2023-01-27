import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/ToCustomerSolid.svg';

export function ToCustomerSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="ToCustomerSolid">
      <SVG />
    </Icon>
  );
}
