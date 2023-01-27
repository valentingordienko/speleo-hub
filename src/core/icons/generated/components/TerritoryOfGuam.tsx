import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/TerritoryOfGuam.svg';

export function TerritoryOfGuam(props: TBaseProps) {
  return (
    <Icon {...props} name="TerritoryOfGuam">
      <SVG />
    </Icon>
  );
}
