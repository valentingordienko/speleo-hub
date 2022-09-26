import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/PlatinumOutline.svg';

export function PlatinumOutline(props: TProps) {
  return (
    <Icon {...props} name="PlatinumOutline">
      <SVG />
    </Icon>
  );
}
