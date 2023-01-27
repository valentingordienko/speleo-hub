import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/CookIslands.svg';

export function CookIslands(props: TBaseProps) {
  return (
    <Icon {...props} name="CookIslands">
      <SVG />
    </Icon>
  );
}
