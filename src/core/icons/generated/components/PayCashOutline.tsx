import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/PayCashOutline.svg';

export function PayCashOutline(props: TProps) {
  return (
    <Icon {...props} name="PayCashOutline">
      <SVG />
    </Icon>
  );
}
