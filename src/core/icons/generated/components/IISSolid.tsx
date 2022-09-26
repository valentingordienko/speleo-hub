import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/IISSolid.svg';

export function IISSolid(props: TProps) {
  return (
    <Icon {...props} name="IISSolid">
      <SVG />
    </Icon>
  );
}
