import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/CompareSolid.svg';

export function CompareSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="CompareSolid">
      <SVG />
    </Icon>
  );
}
