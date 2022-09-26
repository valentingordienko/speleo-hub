import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/CardTSolid.svg';

export function CardTSolid(props: TProps) {
  return (
    <Icon {...props} name="CardTSolid">
      <SVG />
    </Icon>
  );
}
