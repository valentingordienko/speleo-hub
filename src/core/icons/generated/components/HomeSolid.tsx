import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/HomeSolid.svg';

export function HomeSolid(props: TProps) {
  return (
    <Icon {...props} name="HomeSolid">
      <SVG />
    </Icon>
  );
}
