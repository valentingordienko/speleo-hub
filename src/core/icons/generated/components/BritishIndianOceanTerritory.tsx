import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/BritishIndianOceanTerritory.svg';

export function BritishIndianOceanTerritory(props: TProps) {
  return (
    <Icon {...props} name="BritishIndianOceanTerritory">
      <SVG />
    </Icon>
  );
}
