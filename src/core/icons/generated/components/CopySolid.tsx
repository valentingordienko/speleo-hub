import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/CopySolid.svg';

export function CopySolid(props: TBaseProps) {
  return (
    <Icon {...props} name="CopySolid">
      <SVG />
    </Icon>
  );
}
