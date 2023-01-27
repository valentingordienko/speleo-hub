import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Greenland.svg';

export function Greenland(props: TBaseProps) {
  return (
    <Icon {...props} name="Greenland">
      <SVG />
    </Icon>
  );
}
