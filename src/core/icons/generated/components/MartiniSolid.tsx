import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/MartiniSolid.svg';

export function MartiniSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="MartiniSolid">
      <SVG />
    </Icon>
  );
}
