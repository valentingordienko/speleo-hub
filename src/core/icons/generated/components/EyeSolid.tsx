import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/EyeSolid.svg';

export function EyeSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="EyeSolid">
      <SVG />
    </Icon>
  );
}
