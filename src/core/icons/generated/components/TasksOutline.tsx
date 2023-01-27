import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/TasksOutline.svg';

export function TasksOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="TasksOutline">
      <SVG />
    </Icon>
  );
}
