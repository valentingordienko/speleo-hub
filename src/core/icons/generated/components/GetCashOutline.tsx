import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/GetCashOutline.svg';

export function GetCashOutline(props: TProps) {
  return (
    <Icon {...props} name="GetCashOutline">
      <SVG />
    </Icon>
  );
}
