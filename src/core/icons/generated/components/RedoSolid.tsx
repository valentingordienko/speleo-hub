import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/RedoSolid.svg';

export function RedoSolid(props: TProps) {
  return (
    <Icon {...props} name="RedoSolid">
      <SVG />
    </Icon>
  );
}
