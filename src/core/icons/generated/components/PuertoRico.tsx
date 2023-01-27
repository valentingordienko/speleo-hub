import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/PuertoRico.svg';

export function PuertoRico(props: TBaseProps) {
  return (
    <Icon {...props} name="PuertoRico">
      <SVG />
    </Icon>
  );
}
