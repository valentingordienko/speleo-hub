import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/PinSolid.svg';

export function PinSolid(props: TProps) {
  return (
    <Icon {...props} name="PinSolid">
      <SVG />
    </Icon>
  );
}
