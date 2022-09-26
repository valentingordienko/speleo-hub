import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/HeardIslandAndMcDonaldIslands.svg';

export function HeardIslandAndMcDonaldIslands(props: TProps) {
  return (
    <Icon {...props} name="HeardIslandAndMcDonaldIslands">
      <SVG />
    </Icon>
  );
}
