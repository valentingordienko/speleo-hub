import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/DocFinishedSolid.svg';

export function DocFinishedSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="DocFinishedSolid">
      <SVG />
    </Icon>
  );
}
