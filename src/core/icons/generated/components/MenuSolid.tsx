import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/MenuSolid.svg';

export function MenuSolid(props: TProps) {
  return (
    <Icon {...props} name="MenuSolid">
      <SVG />
    </Icon>
  );
}
