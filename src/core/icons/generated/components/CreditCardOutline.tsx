import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/CreditCardOutline.svg';

export function CreditCardOutline(props: TProps) {
  return (
    <Icon {...props} name="CreditCardOutline">
      <SVG />
    </Icon>
  );
}
