import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/CameraSolid.svg';

export function CameraSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="CameraSolid">
      <SVG />
    </Icon>
  );
}
