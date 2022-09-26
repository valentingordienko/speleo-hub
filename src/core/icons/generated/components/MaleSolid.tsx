import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/MaleSolid.svg';

export function MaleSolid(props: TProps) {
  return (
    <Icon {...props} name="MaleSolid">
      <SVG />
    </Icon>
  );
}
