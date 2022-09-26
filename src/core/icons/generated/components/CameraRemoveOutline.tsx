import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/CameraRemoveOutline.svg';

export function CameraRemoveOutline(props: TProps) {
  return (
    <Icon {...props} name="CameraRemoveOutline">
      <SVG />
    </Icon>
  );
}
