import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/DarkModeSolid.svg';

export function DarkModeSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="DarkModeSolid">
      <SVG />
    </Icon>
  );
}
