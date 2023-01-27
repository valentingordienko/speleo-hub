import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/ChristmasIsland.svg';

export function ChristmasIsland(props: TBaseProps) {
  return (
    <Icon {...props} name="ChristmasIsland">
      <SVG />
    </Icon>
  );
}
