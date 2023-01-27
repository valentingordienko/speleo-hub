import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/TuningSolid.svg';

export function TuningSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="TuningSolid">
      <SVG />
    </Icon>
  );
}
