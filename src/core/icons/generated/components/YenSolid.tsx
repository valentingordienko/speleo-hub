import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/YenSolid.svg';

export function YenSolid(props: TProps) {
  return (
    <Icon {...props} name="YenSolid">
      <SVG />
    </Icon>
  );
}
