import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/ExitSolid.svg';

export function ExitSolid(props: TProps) {
  return (
    <Icon {...props} name="ExitSolid">
      <SVG />
    </Icon>
  );
}
