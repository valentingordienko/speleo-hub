import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/GeoOutline.svg';

export function GeoOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="GeoOutline">
      <SVG />
    </Icon>
  );
}
