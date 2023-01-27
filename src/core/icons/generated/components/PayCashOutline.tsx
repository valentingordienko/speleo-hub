import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/PayCashOutline.svg';

export function PayCashOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="PayCashOutline">
      <SVG />
    </Icon>
  );
}
