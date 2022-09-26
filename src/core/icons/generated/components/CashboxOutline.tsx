import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/CashboxOutline.svg';

export function CashboxOutline(props: TProps) {
  return (
    <Icon {...props} name="CashboxOutline">
      <SVG />
    </Icon>
  );
}
