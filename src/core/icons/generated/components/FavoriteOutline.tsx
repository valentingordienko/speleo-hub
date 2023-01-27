import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/FavoriteOutline.svg';

export function FavoriteOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="FavoriteOutline">
      <SVG />
    </Icon>
  );
}
