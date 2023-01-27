import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/FrenchSouthernLands.svg';

export function FrenchSouthernLands(props: TBaseProps) {
  return (
    <Icon {...props} name="FrenchSouthernLands">
      <SVG />
    </Icon>
  );
}
