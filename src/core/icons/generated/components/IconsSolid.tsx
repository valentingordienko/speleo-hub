import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/IconsSolid.svg';

export function IconsSolid(props: TProps) {
  return (
    <Icon {...props} name="IconsSolid">
      <SVG />
    </Icon>
  );
}
