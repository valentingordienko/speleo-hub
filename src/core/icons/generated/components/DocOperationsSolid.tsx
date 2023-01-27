import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/DocOperationsSolid.svg';

export function DocOperationsSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="DocOperationsSolid">
      <SVG />
    </Icon>
  );
}
