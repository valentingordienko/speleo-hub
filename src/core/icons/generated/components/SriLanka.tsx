import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/SriLanka.svg';

export function SriLanka(props: TProps) {
  return (
    <Icon {...props} name="SriLanka">
      <SVG />
    </Icon>
  );
}
