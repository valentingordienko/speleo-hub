import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/BellSolid.svg';

export function BellSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="BellSolid">
      <SVG />
    </Icon>
  );
}
