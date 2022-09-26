import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/PuertoRico.svg';

export function PuertoRico(props: TProps) {
  return (
    <Icon {...props} name="PuertoRico">
      <SVG />
    </Icon>
  );
}
