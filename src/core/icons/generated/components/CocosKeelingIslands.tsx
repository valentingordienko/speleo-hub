import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/CocosKeelingIslands.svg';

export function CocosKeelingIslands(props: TBaseProps) {
  return (
    <Icon {...props} name="CocosKeelingIslands">
      <SVG />
    </Icon>
  );
}
