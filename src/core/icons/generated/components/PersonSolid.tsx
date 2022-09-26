import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/PersonSolid.svg';

export function PersonSolid(props: TProps) {
  return (
    <Icon {...props} name="PersonSolid">
      <SVG />
    </Icon>
  );
}
