import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/HeardIslandAndMcDonaldIslands.svg';

export function HeardIslandAndMcDonaldIslands(props: TBaseProps) {
  return (
    <Icon {...props} name="HeardIslandAndMcDonaldIslands">
      <SVG />
    </Icon>
  );
}
