import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/SilverSolid.svg';

export function SilverSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="SilverSolid">
      <SVG />
    </Icon>
  );
}
