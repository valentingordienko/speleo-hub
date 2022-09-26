import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/CameraRemoveSolid.svg';

export function CameraRemoveSolid(props: TProps) {
  return (
    <Icon {...props} name="CameraRemoveSolid">
      <SVG />
    </Icon>
  );
}
