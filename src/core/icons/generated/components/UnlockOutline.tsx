import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/UnlockOutline.svg';

export function UnlockOutline(props: TProps) {
  return (
    <Icon {...props} name="UnlockOutline">
      <SVG />
    </Icon>
  );
}
