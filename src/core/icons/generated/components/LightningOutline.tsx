import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/LightningOutline.svg';

export function LightningOutline(props: TProps) {
  return (
    <Icon {...props} name="LightningOutline">
      <SVG />
    </Icon>
  );
}
