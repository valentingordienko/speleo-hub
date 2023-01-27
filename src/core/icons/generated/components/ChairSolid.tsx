import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/ChairSolid.svg';

export function ChairSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="ChairSolid">
      <SVG />
    </Icon>
  );
}
