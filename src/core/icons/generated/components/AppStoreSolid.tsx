import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/AppStoreSolid.svg';

export function AppStoreSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="AppStoreSolid">
      <SVG />
    </Icon>
  );
}
