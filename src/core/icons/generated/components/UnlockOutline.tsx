import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/UnlockOutline.svg';

export function UnlockOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="UnlockOutline">
      <SVG />
    </Icon>
  );
}
