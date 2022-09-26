import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/SmallLogo.svg';

export function SmallLogo(props: TProps) {
  return (
    <Icon {...props} name="SmallLogo">
      <SVG />
    </Icon>
  );
}
