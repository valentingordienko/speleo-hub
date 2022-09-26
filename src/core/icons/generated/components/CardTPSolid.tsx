import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/CardTPSolid.svg';

export function CardTPSolid(props: TProps) {
  return (
    <Icon {...props} name="CardTPSolid">
      <SVG />
    </Icon>
  );
}
