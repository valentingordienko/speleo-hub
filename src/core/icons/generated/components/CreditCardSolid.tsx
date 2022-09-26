import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/CreditCardSolid.svg';

export function CreditCardSolid(props: TProps) {
  return (
    <Icon {...props} name="CreditCardSolid">
      <SVG />
    </Icon>
  );
}
