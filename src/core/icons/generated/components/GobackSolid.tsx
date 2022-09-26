import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/GobackSolid.svg';

export function GobackSolid(props: TProps) {
  return (
    <Icon {...props} name="GobackSolid">
      <SVG />
    </Icon>
  );
}
