import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/DocFinishedSolid.svg';

export function DocFinishedSolid(props: TProps) {
  return (
    <Icon {...props} name="DocFinishedSolid">
      <SVG />
    </Icon>
  );
}
