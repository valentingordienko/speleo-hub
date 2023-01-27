import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/StoreSolid.svg';

export function StoreSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="StoreSolid">
      <SVG />
    </Icon>
  );
}
