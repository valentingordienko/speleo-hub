import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/AtSolid.svg';

export function AtSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="AtSolid">
      <SVG />
    </Icon>
  );
}
