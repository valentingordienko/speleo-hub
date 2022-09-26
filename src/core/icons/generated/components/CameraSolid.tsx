import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/CameraSolid.svg';

export function CameraSolid(props: TProps) {
  return (
    <Icon {...props} name="CameraSolid">
      <SVG />
    </Icon>
  );
}
