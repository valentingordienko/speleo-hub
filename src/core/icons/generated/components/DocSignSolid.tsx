import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/DocSignSolid.svg';

export function DocSignSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="DocSignSolid">
      <SVG />
    </Icon>
  );
}
