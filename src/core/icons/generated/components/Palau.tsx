import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Palau.svg';

export function Palau(props: TBaseProps) {
  return (
    <Icon {...props} name="Palau">
      <SVG />
    </Icon>
  );
}
