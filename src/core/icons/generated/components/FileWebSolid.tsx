import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/FileWebSolid.svg';

export function FileWebSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="FileWebSolid">
      <SVG />
    </Icon>
  );
}
