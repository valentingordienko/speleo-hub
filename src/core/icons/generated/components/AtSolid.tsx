import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/AtSolid.svg';

export function AtSolid(props: TProps) {
  return (
    <Icon {...props} name="AtSolid">
      <SVG />
    </Icon>
  );
}
