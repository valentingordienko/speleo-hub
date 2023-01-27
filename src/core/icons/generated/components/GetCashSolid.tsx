import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/GetCashSolid.svg';

export function GetCashSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="GetCashSolid">
      <SVG />
    </Icon>
  );
}
