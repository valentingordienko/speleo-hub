import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/VerifySignOutline.svg';

export function VerifySignOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="VerifySignOutline">
      <SVG />
    </Icon>
  );
}
