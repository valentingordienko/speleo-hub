import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/FinanceOutline.svg';

export function FinanceOutline(props: TProps) {
  return (
    <Icon {...props} name="FinanceOutline">
      <SVG />
    </Icon>
  );
}
