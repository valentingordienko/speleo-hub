import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/GobackSolid.svg';

export function GobackSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="GobackSolid">
      <SVG />
    </Icon>
  );
}
