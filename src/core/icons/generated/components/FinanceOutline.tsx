import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/FinanceOutline.svg';

export function FinanceOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="FinanceOutline">
      <SVG />
    </Icon>
  );
}
