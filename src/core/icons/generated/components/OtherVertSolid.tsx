import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/OtherVertSolid.svg';

export function OtherVertSolid(props: TProps) {
  return (
    <Icon {...props} name="OtherVertSolid">
      <SVG />
    </Icon>
  );
}
