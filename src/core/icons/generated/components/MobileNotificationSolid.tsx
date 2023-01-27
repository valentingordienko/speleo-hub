import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/MobileNotificationSolid.svg';

export function MobileNotificationSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="MobileNotificationSolid">
      <SVG />
    </Icon>
  );
}
