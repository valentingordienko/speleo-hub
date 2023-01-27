import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/CaymanIslands.svg';

export function CaymanIslands(props: TBaseProps) {
  return (
    <Icon {...props} name="CaymanIslands">
      <SVG />
    </Icon>
  );
}
