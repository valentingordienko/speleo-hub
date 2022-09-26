import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/SilverSolid.svg';

export function SilverSolid(props: TProps) {
  return (
    <Icon {...props} name="SilverSolid">
      <SVG />
    </Icon>
  );
}
