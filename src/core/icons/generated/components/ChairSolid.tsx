import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/ChairSolid.svg';

export function ChairSolid(props: TProps) {
  return (
    <Icon {...props} name="ChairSolid">
      <SVG />
    </Icon>
  );
}
