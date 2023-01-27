import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/CardTSolid.svg';

export function CardTSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="CardTSolid">
      <SVG />
    </Icon>
  );
}
