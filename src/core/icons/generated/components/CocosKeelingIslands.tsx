import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/CocosKeelingIslands.svg';

export function CocosKeelingIslands(props: TProps) {
  return (
    <Icon {...props} name="CocosKeelingIslands">
      <SVG />
    </Icon>
  );
}
