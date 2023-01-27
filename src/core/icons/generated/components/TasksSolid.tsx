import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/TasksSolid.svg';

export function TasksSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="TasksSolid">
      <SVG />
    </Icon>
  );
}
