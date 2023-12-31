import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/CardTPSolid.svg';

export function CardTPSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="CardTPSolid">
      <SVG />
    </Icon>
  );
}
