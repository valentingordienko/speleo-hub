import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/ElSalvador.svg';

export function ElSalvador(props: TProps) {
  return (
    <Icon {...props} name="ElSalvador">
      <SVG />
    </Icon>
  );
}
