import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Barbados.svg';

export function Barbados(props: TBaseProps) {
  return (
    <Icon {...props} name="Barbados">
      <SVG />
    </Icon>
  );
}
