import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/BritishIndianOceanTerritory.svg';

export function BritishIndianOceanTerritory(props: TBaseProps) {
  return (
    <Icon {...props} name="BritishIndianOceanTerritory">
      <SVG />
    </Icon>
  );
}
