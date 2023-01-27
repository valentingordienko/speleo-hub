import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Swaziland.svg';

export function Swaziland(props: TBaseProps) {
  return (
    <Icon {...props} name="Swaziland">
      <SVG />
    </Icon>
  );
}
