import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/RefuseSolid.svg';

export function RefuseSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="RefuseSolid">
      <SVG />
    </Icon>
  );
}
