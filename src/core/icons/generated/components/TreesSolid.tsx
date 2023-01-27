import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/TreesSolid.svg';

export function TreesSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="TreesSolid">
      <SVG />
    </Icon>
  );
}
