import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/DocViewSolid.svg';

export function DocViewSolid(props: TProps) {
  return (
    <Icon {...props} name="DocViewSolid">
      <SVG />
    </Icon>
  );
}
