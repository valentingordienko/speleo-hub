import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/FavoriteSolid.svg';

export function FavoriteSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="FavoriteSolid">
      <SVG />
    </Icon>
  );
}
