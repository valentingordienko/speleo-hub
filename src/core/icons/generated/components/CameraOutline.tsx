import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/CameraOutline.svg';

export function CameraOutline(props: TProps) {
  return (
    <Icon {...props} name="CameraOutline">
      <SVG />
    </Icon>
  );
}
