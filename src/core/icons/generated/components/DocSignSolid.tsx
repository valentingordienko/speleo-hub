import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/DocSignSolid.svg';

export function DocSignSolid(props: TProps) {
  return (
    <Icon {...props} name="DocSignSolid">
      <SVG />
    </Icon>
  );
}
