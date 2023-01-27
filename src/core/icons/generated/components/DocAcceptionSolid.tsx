import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/DocAcceptionSolid.svg';

export function DocAcceptionSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="DocAcceptionSolid">
      <SVG />
    </Icon>
  );
}
