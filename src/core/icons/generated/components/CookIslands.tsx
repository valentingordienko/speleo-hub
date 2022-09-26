import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/CookIslands.svg';

export function CookIslands(props: TProps) {
  return (
    <Icon {...props} name="CookIslands">
      <SVG />
    </Icon>
  );
}
