import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/BillSolid.svg';

export function BillSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="BillSolid">
      <SVG />
    </Icon>
  );
}
