import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/PlaySolid.svg';

export function PlaySolid(props: TProps) {
  return (
    <Icon {...props} name="PlaySolid">
      <SVG />
    </Icon>
  );
}
