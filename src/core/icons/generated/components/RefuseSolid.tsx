import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/RefuseSolid.svg';

export function RefuseSolid(props: TProps) {
  return (
    <Icon {...props} name="RefuseSolid">
      <SVG />
    </Icon>
  );
}
