import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/CameraRemoveSolid.svg';

export function CameraRemoveSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="CameraRemoveSolid">
      <SVG />
    </Icon>
  );
}
