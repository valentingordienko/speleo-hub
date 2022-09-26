import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/TreasurySolid.svg';

export function TreasurySolid(props: TProps) {
  return (
    <Icon {...props} name="TreasurySolid">
      <SVG />
    </Icon>
  );
}
