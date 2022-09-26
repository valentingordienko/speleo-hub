import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/GPSOutline.svg';

export function GPSOutline(props: TProps) {
  return (
    <Icon {...props} name="GPSOutline">
      <SVG />
    </Icon>
  );
}
