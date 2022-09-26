import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/OkSolid.svg';

export function OkSolid(props: TProps) {
  return (
    <Icon {...props} name="OkSolid">
      <SVG />
    </Icon>
  );
}
