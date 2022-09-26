import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/DocAcceptionSolid.svg';

export function DocAcceptionSolid(props: TProps) {
  return (
    <Icon {...props} name="DocAcceptionSolid">
      <SVG />
    </Icon>
  );
}
