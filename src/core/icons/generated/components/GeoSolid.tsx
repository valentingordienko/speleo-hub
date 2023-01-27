import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/GeoSolid.svg';

export function GeoSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="GeoSolid">
      <SVG />
    </Icon>
  );
}
