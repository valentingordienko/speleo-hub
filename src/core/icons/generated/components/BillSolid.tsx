import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/BillSolid.svg';

export function BillSolid(props: TProps) {
  return (
    <Icon {...props} name="BillSolid">
      <SVG />
    </Icon>
  );
}
