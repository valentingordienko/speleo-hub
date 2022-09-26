import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/PipetteSolid.svg';

export function PipetteSolid(props: TProps) {
  return (
    <Icon {...props} name="PipetteSolid">
      <SVG />
    </Icon>
  );
}
