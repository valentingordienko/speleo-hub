import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/GlobeSolid.svg';

export function GlobeSolid(props: TProps) {
  return (
    <Icon {...props} name="GlobeSolid">
      <SVG />
    </Icon>
  );
}
