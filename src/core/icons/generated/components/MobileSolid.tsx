import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/MobileSolid.svg';

export function MobileSolid(props: TProps) {
  return (
    <Icon {...props} name="MobileSolid">
      <SVG />
    </Icon>
  );
}
