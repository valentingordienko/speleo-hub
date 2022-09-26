import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/FavoriteSolid.svg';

export function FavoriteSolid(props: TProps) {
  return (
    <Icon {...props} name="FavoriteSolid">
      <SVG />
    </Icon>
  );
}
