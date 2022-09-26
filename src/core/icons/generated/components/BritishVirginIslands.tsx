import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/BritishVirginIslands.svg';

export function BritishVirginIslands(props: TProps) {
  return (
    <Icon {...props} name="BritishVirginIslands">
      <SVG />
    </Icon>
  );
}
