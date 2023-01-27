import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/ToCustomerOutline.svg';

export function ToCustomerOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="ToCustomerOutline">
      <SVG />
    </Icon>
  );
}
