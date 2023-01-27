import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/TurksAndCaicosIslands.svg';

export function TurksAndCaicosIslands(props: TBaseProps) {
  return (
    <Icon {...props} name="TurksAndCaicosIslands">
      <SVG />
    </Icon>
  );
}
