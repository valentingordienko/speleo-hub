import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/CreditSolid.svg';

export function CreditSolid(props: TProps) {
  return (
    <Icon {...props} name="CreditSolid">
      <SVG />
    </Icon>
  );
}
