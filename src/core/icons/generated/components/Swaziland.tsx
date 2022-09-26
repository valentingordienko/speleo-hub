import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Swaziland.svg';

export function Swaziland(props: TProps) {
  return (
    <Icon {...props} name="Swaziland">
      <SVG />
    </Icon>
  );
}
