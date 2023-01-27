import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/RedactSolid.svg';

export function RedactSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="RedactSolid">
      <SVG />
    </Icon>
  );
}
