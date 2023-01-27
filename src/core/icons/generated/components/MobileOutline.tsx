import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/MobileOutline.svg';

export function MobileOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="MobileOutline">
      <SVG />
    </Icon>
  );
}
