import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/RegenerateSolid.svg';

export function RegenerateSolid(props: TProps) {
  return (
    <Icon {...props} name="RegenerateSolid">
      <SVG />
    </Icon>
  );
}
