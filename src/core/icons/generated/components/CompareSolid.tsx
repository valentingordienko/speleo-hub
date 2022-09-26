import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/CompareSolid.svg';

export function CompareSolid(props: TProps) {
  return (
    <Icon {...props} name="CompareSolid">
      <SVG />
    </Icon>
  );
}
