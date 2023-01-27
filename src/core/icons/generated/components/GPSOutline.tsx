import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/GPSOutline.svg';

export function GPSOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="GPSOutline">
      <SVG />
    </Icon>
  );
}
