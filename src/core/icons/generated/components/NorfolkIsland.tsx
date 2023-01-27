import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/NorfolkIsland.svg';

export function NorfolkIsland(props: TBaseProps) {
  return (
    <Icon {...props} name="NorfolkIsland">
      <SVG />
    </Icon>
  );
}
