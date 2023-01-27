import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/SmallLogo.svg';

export function SmallLogo(props: TBaseProps) {
  return (
    <Icon {...props} name="SmallLogo">
      <SVG />
    </Icon>
  );
}
