import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Barbados.svg';

export function Barbados(props: TProps) {
  return (
    <Icon {...props} name="Barbados">
      <SVG />
    </Icon>
  );
}
