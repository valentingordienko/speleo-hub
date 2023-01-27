import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/FileXLSSolid.svg';

export function FileXLSSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="FileXLSSolid">
      <SVG />
    </Icon>
  );
}
