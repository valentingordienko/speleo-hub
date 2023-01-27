import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/LightningOutline.svg';

export function LightningOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="LightningOutline">
      <SVG />
    </Icon>
  );
}
