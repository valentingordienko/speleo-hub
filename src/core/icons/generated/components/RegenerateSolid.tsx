import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/RegenerateSolid.svg';

export function RegenerateSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="RegenerateSolid">
      <SVG />
    </Icon>
  );
}
