import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/DocViewSolid.svg';

export function DocViewSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="DocViewSolid">
      <SVG />
    </Icon>
  );
}
