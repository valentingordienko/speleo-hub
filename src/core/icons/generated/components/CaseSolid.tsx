import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/CaseSolid.svg';

export function CaseSolid(props: TProps) {
  return (
    <Icon {...props} name="CaseSolid">
      <SVG />
    </Icon>
  );
}
