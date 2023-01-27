import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/MaleSolid.svg';

export function MaleSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="MaleSolid">
      <SVG />
    </Icon>
  );
}
