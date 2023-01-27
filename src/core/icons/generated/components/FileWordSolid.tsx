import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/FileWordSolid.svg';

export function FileWordSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="FileWordSolid">
      <SVG />
    </Icon>
  );
}
