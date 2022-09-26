import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/BouvetIsland.svg';

export function BouvetIsland(props: TProps) {
  return (
    <Icon {...props} name="BouvetIsland">
      <SVG />
    </Icon>
  );
}
