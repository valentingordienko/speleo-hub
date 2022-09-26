import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Greenland.svg';

export function Greenland(props: TProps) {
  return (
    <Icon {...props} name="Greenland">
      <SVG />
    </Icon>
  );
}
