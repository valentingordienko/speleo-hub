import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/DateDownSolid.svg';

export function DateDownSolid(props: TProps) {
  return (
    <Icon {...props} name="DateDownSolid">
      <SVG />
    </Icon>
  );
}
