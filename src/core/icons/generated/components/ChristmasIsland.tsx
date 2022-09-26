import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/ChristmasIsland.svg';

export function ChristmasIsland(props: TProps) {
  return (
    <Icon {...props} name="ChristmasIsland">
      <SVG />
    </Icon>
  );
}
