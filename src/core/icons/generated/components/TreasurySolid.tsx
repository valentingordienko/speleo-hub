import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/TreasurySolid.svg';

export function TreasurySolid(props: TBaseProps) {
  return (
    <Icon {...props} name="TreasurySolid">
      <SVG />
    </Icon>
  );
}
