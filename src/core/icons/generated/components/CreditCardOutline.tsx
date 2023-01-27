import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/CreditCardOutline.svg';

export function CreditCardOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="CreditCardOutline">
      <SVG />
    </Icon>
  );
}
