import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/FileJpgSolid.svg';

export function FileJpgSolid(props: TProps) {
  return (
    <Icon {...props} name="FileJpgSolid">
      <SVG />
    </Icon>
  );
}
