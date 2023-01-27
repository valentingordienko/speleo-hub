import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/ThirdPersonOutline.svg';

export function ThirdPersonOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="ThirdPersonOutline">
      <SVG />
    </Icon>
  );
}
