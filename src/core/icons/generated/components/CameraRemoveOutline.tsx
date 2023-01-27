import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/CameraRemoveOutline.svg';

export function CameraRemoveOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="CameraRemoveOutline">
      <SVG />
    </Icon>
  );
}
