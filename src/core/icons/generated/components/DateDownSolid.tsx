import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/DateDownSolid.svg';

export function DateDownSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="DateDownSolid">
      <SVG />
    </Icon>
  );
}
