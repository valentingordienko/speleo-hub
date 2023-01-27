import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/BritishVirginIslands.svg';

export function BritishVirginIslands(props: TBaseProps) {
  return (
    <Icon {...props} name="BritishVirginIslands">
      <SVG />
    </Icon>
  );
}
