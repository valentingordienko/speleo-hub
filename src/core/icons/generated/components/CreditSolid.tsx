import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/CreditSolid.svg';

export function CreditSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="CreditSolid">
      <SVG />
    </Icon>
  );
}
