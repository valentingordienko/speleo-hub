import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/CreditOutline.svg';

export function CreditOutline(props: TProps) {
  return (
    <Icon {...props} name="CreditOutline">
      <SVG />
    </Icon>
  );
}
