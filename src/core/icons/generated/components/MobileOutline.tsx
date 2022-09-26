import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/MobileOutline.svg';

export function MobileOutline(props: TProps) {
  return (
    <Icon {...props} name="MobileOutline">
      <SVG />
    </Icon>
  );
}
