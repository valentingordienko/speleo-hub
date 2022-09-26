import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/StoreSolid.svg';

export function StoreSolid(props: TProps) {
  return (
    <Icon {...props} name="StoreSolid">
      <SVG />
    </Icon>
  );
}
