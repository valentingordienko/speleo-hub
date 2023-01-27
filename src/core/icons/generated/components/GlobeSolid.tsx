import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/GlobeSolid.svg';

export function GlobeSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="GlobeSolid">
      <SVG />
    </Icon>
  );
}
