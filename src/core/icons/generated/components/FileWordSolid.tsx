import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/FileWordSolid.svg';

export function FileWordSolid(props: TProps) {
  return (
    <Icon {...props} name="FileWordSolid">
      <SVG />
    </Icon>
  );
}
