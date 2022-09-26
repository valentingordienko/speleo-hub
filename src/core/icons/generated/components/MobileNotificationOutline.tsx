import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/MobileNotificationOutline.svg';

export function MobileNotificationOutline(props: TProps) {
  return (
    <Icon {...props} name="MobileNotificationOutline">
      <SVG />
    </Icon>
  );
}
