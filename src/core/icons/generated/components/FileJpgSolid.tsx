import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/FileJpgSolid.svg';

export function FileJpgSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="FileJpgSolid">
      <SVG />
    </Icon>
  );
}
