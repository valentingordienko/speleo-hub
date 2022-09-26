import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/RedactSolid.svg';

export function RedactSolid(props: TProps) {
  return (
    <Icon {...props} name="RedactSolid">
      <SVG />
    </Icon>
  );
}
