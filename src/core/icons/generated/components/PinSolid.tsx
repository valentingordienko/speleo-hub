import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/PinSolid.svg';

export function PinSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="PinSolid">
      <SVG />
    </Icon>
  );
}
