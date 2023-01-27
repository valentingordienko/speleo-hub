import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/CaseSolid.svg';

export function CaseSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="CaseSolid">
      <SVG />
    </Icon>
  );
}
