import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/GeoSolid.svg';

export function GeoSolid(props: TProps) {
  return (
    <Icon {...props} name="GeoSolid">
      <SVG />
    </Icon>
  );
}
