import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/GetCashSolid.svg';

export function GetCashSolid(props: TProps) {
  return (
    <Icon {...props} name="GetCashSolid">
      <SVG />
    </Icon>
  );
}
