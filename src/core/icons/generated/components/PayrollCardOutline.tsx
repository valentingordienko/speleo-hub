import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/PayrollCardOutline.svg';

export function PayrollCardOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="PayrollCardOutline">
      <SVG />
    </Icon>
  );
}
