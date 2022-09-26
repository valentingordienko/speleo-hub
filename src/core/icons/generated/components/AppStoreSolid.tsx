import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/AppStoreSolid.svg';

export function AppStoreSolid(props: TProps) {
  return (
    <Icon {...props} name="AppStoreSolid">
      <SVG />
    </Icon>
  );
}
