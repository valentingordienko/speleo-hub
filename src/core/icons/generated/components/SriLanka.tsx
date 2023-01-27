import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/SriLanka.svg';

export function SriLanka(props: TBaseProps) {
  return (
    <Icon {...props} name="SriLanka">
      <SVG />
    </Icon>
  );
}
