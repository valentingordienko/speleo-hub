import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/MobileSolid.svg';

export function MobileSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="MobileSolid">
      <SVG />
    </Icon>
  );
}
