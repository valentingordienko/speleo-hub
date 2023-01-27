import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/CutSolid.svg';

export function CutSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="CutSolid">
      <SVG />
    </Icon>
  );
}
