import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/OkSolid.svg';

export function OkSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="OkSolid">
      <SVG />
    </Icon>
  );
}
