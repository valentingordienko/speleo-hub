import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/MartiniSolid.svg';

export function MartiniSolid(props: TProps) {
  return (
    <Icon {...props} name="MartiniSolid">
      <SVG />
    </Icon>
  );
}
