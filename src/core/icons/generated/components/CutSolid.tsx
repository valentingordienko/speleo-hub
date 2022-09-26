import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/CutSolid.svg';

export function CutSolid(props: TProps) {
  return (
    <Icon {...props} name="CutSolid">
      <SVG />
    </Icon>
  );
}
