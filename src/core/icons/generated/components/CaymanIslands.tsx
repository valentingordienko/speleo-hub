import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/CaymanIslands.svg';

export function CaymanIslands(props: TProps) {
  return (
    <Icon {...props} name="CaymanIslands">
      <SVG />
    </Icon>
  );
}
