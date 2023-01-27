import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/RedoSolid.svg';

export function RedoSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="RedoSolid">
      <SVG />
    </Icon>
  );
}
