import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/MobileNotificationSolid.svg';

export function MobileNotificationSolid(props: TProps) {
  return (
    <Icon {...props} name="MobileNotificationSolid">
      <SVG />
    </Icon>
  );
}
