import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/PayrollCardOutline.svg';

export function PayrollCardOutline(props: TProps) {
  return (
    <Icon {...props} name="PayrollCardOutline">
      <SVG />
    </Icon>
  );
}
