import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/FrenchSouthernLands.svg';

export function FrenchSouthernLands(props: TProps) {
  return (
    <Icon {...props} name="FrenchSouthernLands">
      <SVG />
    </Icon>
  );
}
