import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/HomeSolid.svg';

export function HomeSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="HomeSolid">
      <SVG />
    </Icon>
  );
}
