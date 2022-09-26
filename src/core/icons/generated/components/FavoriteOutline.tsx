import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/FavoriteOutline.svg';

export function FavoriteOutline(props: TProps) {
  return (
    <Icon {...props} name="FavoriteOutline">
      <SVG />
    </Icon>
  );
}
