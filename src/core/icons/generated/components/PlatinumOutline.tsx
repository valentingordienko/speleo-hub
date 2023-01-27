import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/PlatinumOutline.svg';

export function PlatinumOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="PlatinumOutline">
      <SVG />
    </Icon>
  );
}
