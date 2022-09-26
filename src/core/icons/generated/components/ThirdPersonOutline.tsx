import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/ThirdPersonOutline.svg';

export function ThirdPersonOutline(props: TProps) {
  return (
    <Icon {...props} name="ThirdPersonOutline">
      <SVG />
    </Icon>
  );
}
