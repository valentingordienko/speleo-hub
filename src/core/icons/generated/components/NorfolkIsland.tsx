import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/NorfolkIsland.svg';

export function NorfolkIsland(props: TProps) {
  return (
    <Icon {...props} name="NorfolkIsland">
      <SVG />
    </Icon>
  );
}
