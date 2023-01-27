import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/CameraOutline.svg';

export function CameraOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="CameraOutline">
      <SVG />
    </Icon>
  );
}
