import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/ProcessSolid.svg';

export function ProcessSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="ProcessSolid">
      <SVG />
    </Icon>
  );
}
