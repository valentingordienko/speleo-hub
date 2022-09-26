import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/DocOperationsSolid.svg';

export function DocOperationsSolid(props: TProps) {
  return (
    <Icon {...props} name="DocOperationsSolid">
      <SVG />
    </Icon>
  );
}
