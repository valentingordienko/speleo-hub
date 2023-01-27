import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/IconsSolid.svg';

export function IconsSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="IconsSolid">
      <SVG />
    </Icon>
  );
}
