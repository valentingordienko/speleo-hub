import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/TerritoryOfGuam.svg';

export function TerritoryOfGuam(props: TProps) {
  return (
    <Icon {...props} name="TerritoryOfGuam">
      <SVG />
    </Icon>
  );
}
