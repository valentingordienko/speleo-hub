import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/TuningSolid.svg';

export function TuningSolid(props: TProps) {
  return (
    <Icon {...props} name="TuningSolid">
      <SVG />
    </Icon>
  );
}
