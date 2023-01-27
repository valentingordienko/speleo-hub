import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/MobileNotificationOutline.svg';

export function MobileNotificationOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="MobileNotificationOutline">
      <SVG />
    </Icon>
  );
}
