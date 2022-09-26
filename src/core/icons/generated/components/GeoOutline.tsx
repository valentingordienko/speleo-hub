import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/GeoOutline.svg';

export function GeoOutline(props: TProps) {
  return (
    <Icon {...props} name="GeoOutline">
      <SVG />
    </Icon>
  );
}
