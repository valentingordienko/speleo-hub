import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/EyeSolid.svg';

export function EyeSolid(props: TProps) {
  return (
    <Icon {...props} name="EyeSolid">
      <SVG />
    </Icon>
  );
}
