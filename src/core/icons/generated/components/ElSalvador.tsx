import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/ElSalvador.svg';

export function ElSalvador(props: TBaseProps) {
  return (
    <Icon {...props} name="ElSalvador">
      <SVG />
    </Icon>
  );
}
