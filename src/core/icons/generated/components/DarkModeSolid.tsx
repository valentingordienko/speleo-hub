import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/DarkModeSolid.svg';

export function DarkModeSolid(props: TProps) {
  return (
    <Icon {...props} name="DarkModeSolid">
      <SVG />
    </Icon>
  );
}
