import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/PipetteSolid.svg';

export function PipetteSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="PipetteSolid">
      <SVG />
    </Icon>
  );
}
