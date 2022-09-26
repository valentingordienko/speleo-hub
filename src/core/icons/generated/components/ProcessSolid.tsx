import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/ProcessSolid.svg';

export function ProcessSolid(props: TProps) {
  return (
    <Icon {...props} name="ProcessSolid">
      <SVG />
    </Icon>
  );
}
