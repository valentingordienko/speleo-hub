import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/IISSolid.svg';

export function IISSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="IISSolid">
      <SVG />
    </Icon>
  );
}
