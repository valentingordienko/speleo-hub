import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/TurksAndCaicosIslands.svg';

export function TurksAndCaicosIslands(props: TProps) {
  return (
    <Icon {...props} name="TurksAndCaicosIslands">
      <SVG />
    </Icon>
  );
}
