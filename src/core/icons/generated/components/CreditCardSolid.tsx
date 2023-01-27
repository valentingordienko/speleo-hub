import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/CreditCardSolid.svg';

export function CreditCardSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="CreditCardSolid">
      <SVG />
    </Icon>
  );
}
