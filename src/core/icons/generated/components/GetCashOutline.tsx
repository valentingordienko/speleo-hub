import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/GetCashOutline.svg';

export function GetCashOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="GetCashOutline">
      <SVG />
    </Icon>
  );
}
