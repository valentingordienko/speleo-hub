import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/CreditOutline.svg';

export function CreditOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="CreditOutline">
      <SVG />
    </Icon>
  );
}
