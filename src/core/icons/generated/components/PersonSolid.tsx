import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/PersonSolid.svg';

export function PersonSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="PersonSolid">
      <SVG />
    </Icon>
  );
}
