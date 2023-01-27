import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/TreesOutline.svg';

export function TreesOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="TreesOutline">
      <SVG />
    </Icon>
  );
}
