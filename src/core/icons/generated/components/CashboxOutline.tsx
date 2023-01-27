import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/CashboxOutline.svg';

export function CashboxOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="CashboxOutline">
      <SVG />
    </Icon>
  );
}
