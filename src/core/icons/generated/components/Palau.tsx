import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Palau.svg';

export function Palau(props: TProps) {
  return (
    <Icon {...props} name="Palau">
      <SVG />
    </Icon>
  );
}
