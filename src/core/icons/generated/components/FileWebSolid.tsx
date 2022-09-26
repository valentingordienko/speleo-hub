import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/FileWebSolid.svg';

export function FileWebSolid(props: TProps) {
  return (
    <Icon {...props} name="FileWebSolid">
      <SVG />
    </Icon>
  );
}
