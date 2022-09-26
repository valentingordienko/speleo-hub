import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/VerifySignOutline.svg';

export function VerifySignOutline(props: TProps) {
  return (
    <Icon {...props} name="VerifySignOutline">
      <SVG />
    </Icon>
  );
}
