import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/BouvetIsland.svg';

export function BouvetIsland(props: TBaseProps) {
  return (
    <Icon {...props} name="BouvetIsland">
      <SVG />
    </Icon>
  );
}
