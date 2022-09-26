import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/ToCustomerOutline.svg';

export function ToCustomerOutline(props: TProps) {
  return (
    <Icon {...props} name="ToCustomerOutline">
      <SVG />
    </Icon>
  );
}
