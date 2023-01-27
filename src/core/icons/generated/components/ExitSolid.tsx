import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/ExitSolid.svg';

export function ExitSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="ExitSolid">
      <SVG />
    </Icon>
  );
}
